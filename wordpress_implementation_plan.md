# Implementation Plan: Porting Next.js to WordPress Theme + Elementor Widgets

This document provides a detailed, step-by-step blueprint to port your Next.js application (`CrispIdea`) to WordPress. The goal is to deliver a monolithic theme where every page, layout section, card, and animation is fully editable by non-developers inside the **Elementor** editor.

---

## 1. Directory Structure & Architecture

To keep the project clean, secure, and performant:
1.  **WordPress Theme (Base Canvas):** We will use the official, lightweight [Hello Elementor](https://wordpress.org/themes/hello-elementor/) theme as our base theme. This theme has no bloated styling and serves as a blank sheet for Elementor.
2.  **Custom Plugin (`crispidea-elementor-addon`):** All custom sections, cards, marquees, and charts from Next.js will be registered as custom Elementor widgets in a custom plugin. This keeps our code modular and decoupled from the theme.
3.  **React Bundle (For Charts):** The interactive charts (`TimelinePortfolioChart`, `CoverageHeatmapDashboard`, and `ResearchTargetsDashboard`) will be compiled into a single JavaScript file and enqueued on pages that contain them.

### File Structure of the Custom Plugin

```text
wp-content/plugins/crispidea-elementor-addon/
├── crispidea-elementor-addon.php       # Main plugin load file
├── assets/
│   ├── css/
│   │   └── global-style.css            # Extracted styles/Tailwind utilities
│   ├── js/
│   │   ├── react-charts-bundle.min.js  # Compiled React/Recharts/Papaparse bundle
│   │   └── animations.js               # GSAP or vanilla JS animations
├── widgets/
│   ├── class-hero-widget.php           # Hero Section
│   ├── class-marquee-widget.php        # Trusted Logos Marquee
│   ├── class-chart-portfolio-widget.php# Portfolio performance chart
│   ├── class-chart-heatmap-widget.php  # Heatmap coverage chart
│   ├── class-research-grid-widget.php  # Equity & Thematic Research Cards Grid
│   ├── class-experts-slider-widget.php # Team / Leaders Grid
│   └── class-faq-accordion-widget.php  # FAQ Accordion
```

---

## 2. Step 1: Setting Up the Plugin Boilerplate

Create the file `wp-content/plugins/crispidea-elementor-addon/crispidea-elementor-addon.php`:

```php
<?php
/**
 * Plugin Name: CrispIdea Custom Elementor Addon
 * Description: Registers custom layout sections (Banners, Marquee, Accordions, Team, React Charts) as Elementor Widgets.
 * Version: 1.0.0
 * Author: Your Agency
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Enqueue styles and compiled React bundle
function crispidea_enqueue_addon_assets() {
    // Enqueue Global Styles compiled from Tailwind/Globals
    wp_enqueue_style( 
        'crispidea-global-style', 
        plugins_url( '/assets/css/global-style.css', __FILE__ ), 
        [], 
        '1.0.0' 
    );

    // Enqueue React charts bundle (registered but loaded only when widget is active)
    wp_register_script( 
        'crispidea-react-charts', 
        plugins_url( '/assets/js/react-charts-bundle.min.js', __FILE__ ), 
        [], 
        '1.0.0', 
        true 
    );
}
add_action( 'wp_enqueue_scripts', 'crispidea_enqueue_addon_assets' );

// Register Elementor Widgets
function register_crispidea_elementor_widgets( $widgets_manager ) {
    require_once( __DIR__ . '/widgets/class-hero-widget.php' );
    require_once( __DIR__ . '/widgets/class-marquee-widget.php' );
    require_once( __DIR__ . '/widgets/class-chart-portfolio-widget.php' );
    require_once( __DIR__ . '/widgets/class-chart-heatmap-widget.php' );
    require_once( __DIR__ . '/widgets/class-research-grid-widget.php' );
    require_once( __DIR__ . '/widgets/class-experts-slider-widget.php' );
    require_once( __DIR__ . '/widgets/class-faq-accordion-widget.php' );

    $widgets_manager->register( new \Elementor_Hero_Widget() );
    $widgets_manager->register( new \Elementor_Marquee_Widget() );
    $widgets_manager->register( new \Elementor_Portfolio_Chart_Widget() );
    $widgets_manager->register( new \Elementor_Heatmap_Chart_Widget() );
    $widgets_manager->register( new \Elementor_Research_Grid_Widget() );
    $widgets_manager->register( new \Elementor_Experts_Slider_Widget() );
    $widgets_manager->register( new \Elementor_FAQ_Accordion_Widget() );
}
add_action( 'elementor/widgets/register', 'register_crispidea_elementor_widgets' );
```

---

## 3. Step 2: Compiling React Charts to a Standalone JS Bundle

Since Recharts and PapaParse require a React compiler and state tracking, we will bundle them into a single JS file.

1.  **Set up a small Vite project** in a directory like `scratch/charts-bundle`:
    ```bash
    npm init vite@latest charts-bundle -- --template react
    cd charts-bundle
    npm install recharts papaparse lucide-react
    ```
2.  **Export widgets to window globals.** In `src/main.jsx`:
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import TimelinePortfolioChart from './components/TimelinePortfolioChart';
    import CoverageHeatmapDashboard from './components/CoverageHeatmapDashboard';

    // Mount logic
    document.addEventListener('DOMContentLoaded', () => {
      // Portfolio Chart
      const portfolioEl = document.getElementById('crisp-portfolio-chart');
      if (portfolioEl) {
        const root = ReactDOM.createRoot(portfolioEl);
        root.render(
          <TimelinePortfolioChart 
            csvUrl={portfolioEl.getAttribute('data-csv')}
            themeColor={portfolioEl.getAttribute('data-color')}
          />
        );
      }

      // Heatmap Dashboard
      const heatmapEl = document.getElementById('crisp-heatmap-chart');
      if (heatmapEl) {
        const root = ReactDOM.createRoot(heatmapEl);
        root.render(
          <CoverageHeatmapDashboard 
            summaryCsv={heatmapEl.getAttribute('data-summary-csv')}
            chartsDirUrl={heatmapEl.getAttribute('data-charts-dir')}
          />
        );
      }
    });
    ```
3.  **Build configurations (Vite Single File):**
    Configure `vite.config.js` to bundle everything into a single JS file:
    ```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      build: {
        rollupOptions: {
          output: {
            entryFileNames: 'react-charts-bundle.min.js',
            assetFileNames: 'react-charts-bundle.[ext]',
            chunkFileNames: '[name].js',
          }
        },
        outDir: '../../wp-content/plugins/crispidea-elementor-addon/assets/js',
        emptyOutDir: false
      }
    });
    ```
4.  Run `npm run build` to output the JS bundle directly into the WordPress plugin asset folder!

---

## 4. Step 3: Mapping Pages & Custom Widgets (Spoon-Fed Details)

### 4.1 Page: Home Page (`src/app/page.js`)

#### Widget A: Customizable Banner/Hero Section
*   **Controls needed:**
    *   `title` (Textarea - HTML allowed)
    *   `subtitle` (Textarea)
    *   `cta_text_1` (Text), `cta_link_1` (URL)
    *   `cta_text_2` (Text), `cta_link_2` (URL)
    *   `hero_background_image` (Media Upload)
*   **Widget PHP Rendering:**
    ```php
    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="relative py-24 bg-white overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="hero-text">
                    <h1 class="text-4xl md:text-6xl font-serif font-bold text-[#1F2922] leading-tight">
                        <?php echo wp_kses_post( $settings['title'] ); ?>
                    </h1>
                    <p class="mt-6 text-md text-[#1F2922]/70 max-w-lg">
                        <?php echo esc_html( $settings['subtitle'] ); ?>
                    </p>
                    <div class="mt-8 flex gap-4">
                        <a href="<?php echo esc_url( $settings['cta_link_1']['url'] ); ?>" class="bg-[#4A6B52] text-white px-6 py-3 rounded-full font-bold">
                            <?php echo esc_html( $settings['cta_text_1'] ); ?>
                        </a>
                        <a href="<?php echo esc_url( $settings['cta_link_2']['url'] ); ?>" class="border border-[#4A6B52] text-[#4A6B52] px-6 py-3 rounded-full font-bold">
                            <?php echo esc_html( $settings['cta_text_2'] ); ?>
                        </a>
                    </div>
                </div>
                <div class="hero-image relative h-[450px]">
                    <img src="<?php echo esc_url( $settings['hero_background_image']['url'] ); ?>" class="object-cover rounded-2xl w-full h-full" alt="Hero Image">
                </div>
            </div>
        </section>
        <?php
    }
    ```

#### Widget B: Portfolio Performance Chart (`TimelinePortfolioChart.jsx`)
*   **Controls needed:**
    *   `csv_file` (Media Upload - client uploads `.csv` file directly to WordPress Media Library)
    *   `theme_color` (Color Picker)
*   **Widget PHP Rendering:**
    ```php
    protected function render() {
        $settings = $this->get_settings_for_display();
        wp_enqueue_script( 'crispidea-react-charts' ); // Load React bundle
        ?>
        <div class="chart-wrapper py-12">
            <h3 class="text-xl font-bold mb-6">Portfolio Performance Analytics</h3>
            <div 
                id="crisp-portfolio-chart" 
                data-csv="<?php echo esc_url( $settings['csv_file']['url'] ); ?>"
                data-color="<?php echo esc_attr( $settings['theme_color'] ); ?>"
                style="min-height: 400px; width: 100%;"
            >
                <!-- React bundle will mount here -->
            </div>
        </div>
        <?php
    }
    ```

#### Widget C: Coverage Heatmap Dashboard (`CoverageHeatmapDashboard.jsx`)
*   **Controls needed:**
    *   `summary_csv` (Media Upload - client uploads `heatmap-summary.csv`)
    *   `charts_directory_url` (Text field - client writes the path or folder link where individual company CSVs are uploaded. In WordPress, they can create a folder `wp-content/uploads/charts/` via FTP or use a file manager plugin).
*   **Widget PHP Rendering:**
    ```php
    protected function render() {
        $settings = $this->get_settings_for_display();
        wp_enqueue_script( 'crispidea-react-charts' );
        ?>
        <div class="heatmap-wrapper py-12 bg-[#FAF8F5]">
            <div 
                id="crisp-heatmap-chart"
                data-summary-csv="<?php echo esc_url( $settings['summary_csv']['url'] ); ?>"
                data-charts-dir="<?php echo esc_url( $settings['charts_directory_url'] ); ?>"
                style="min-height: 600px; width: 100%;"
            >
                <!-- React dashboard will mount here -->
            </div>
        </div>
        <?php
    }
    ```

#### Widget D: Team / Experts Slider (`class-experts-slider-widget.php`)
*   **Controls needed:**
    *   `team_members` (Elementor REPEATER control)
        *   `name` (Text)
        *   `role` (Text)
        *   `image` (Media Upload)
        *   `quote` (Textarea)
        *   `paragraphs` (WYSIWYG/Textarea)
        *   `stats` (REPEATER nested)
            *   `label` (Text)
            *   `value` (Text)
*   **Widget PHP Rendering:** Loop through the repeater and construct the team card flex grid, matching the slide effects and modular popup modals (which are toggled with simple vanilla JavaScript included in `assets/js/animations.js`).

---

### 4.2 Pages: Equity & Thematic Research

#### Widget E: Research Cards Grid (`class-research-grid-widget.php`)
*   **Controls needed:**
    *   `grid_layout` (Select: `3x4`, `3x3`, `4x4`)
    *   `research_cards` (Elementor REPEATER control)
        *   `title` (Text)
        *   `link` (URL)
        *   `image` (Media Upload)
        *   `category` (Text/Select - e.g., "Aviation", "SaaS")
        *   `date` (Date Picker)
        *   `target_price` (Text)
        *   `current_price` (Text)
*   **Visual Alignment:** The markup mimics the Tailwind classes:
    *   Card Wrapper: `h-[380px] md:h-[400px] border border-[#4A6B52]/10 rounded-2xl overflow-hidden`
    *   Image aspect: `h-[180px] md:h-[200px] object-cover`
    *   Text wrapper: `p-5 flex flex-col justify-between`
    *   Custom dynamic filter: Elementor supports tabs. When a client adds categories, a simple filter bar is built on the top of the grid using vanilla JS `card.style.display = 'block'/'none'`.

---

### 4.3 Page: Wealth Management (`src/app/wealth-management/page.js`)

#### Widget F: Service / Features List
*   **Controls needed:**
    *   `services` (Repeater)
        *   `icon` (Select icon library or Media upload for SVGs)
        *   `title` (Text)
        *   `description` (Textarea)
*   **Widget PHP Rendering:** Render cards in a responsive CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-8`), matching fonts (serif for headings, sans-serif for content).

---

### 4.4 Page: FAQ (`src/app/faq/page.js`)

#### Widget G: Collapsible Accordion Grid
*   **Controls needed:**
    *   `faqs` (Repeater)
        *   `question` (Text)
        *   `answer` (Textarea/WYSIWYG)
*   **Widget PHP Rendering:**
    ```php
    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <div class="faq-accordion-container max-w-3xl mx-auto py-12">
            <?php foreach ( $settings['faqs'] as $index => $faq ) : ?>
                <div class="faq-item border-b border-[#4A6B52]/10 py-4 cursor-pointer" onclick="toggleFaq(this)">
                    <div class="flex justify-between items-center">
                        <h4 class="font-serif font-bold text-lg text-[#1F2922]"><?php echo esc_html( $faq['question'] ); ?></h4>
                        <span class="faq-icon text-[#4A6B52] font-bold text-xl">+</span>
                    </div>
                    <div class="faq-answer mt-3 text-sm text-[#1F2922]/70" style="display: none;">
                        <?php echo wp_kses_post( $faq['answer'] ); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <script>
            function toggleFaq(el) {
                const answer = el.querySelector('.faq-answer');
                const icon = el.querySelector('.faq-icon');
                if (answer.style.display === 'none' || !answer.style.display) {
                    answer.style.display = 'block';
                    icon.textContent = '−';
                } else {
                    answer.style.display = 'none';
                    icon.textContent = '+';
                }
            }
        </script>
        <?php
    }
    ```

---

## 5. Verification & Handover Checklist

After implementing the theme and activating the custom Elementor addon plugin, run these tests:

- [ ] **WordPress Media Library Checks:** Verify that uploading new JPG, PNG, and CSV files works and does not break the React components.
- [ ] **Elementor Controls Calibration:** Test that toggling "Marquee Animation" to `Off` instantly renders static, centered logos, and changing "Duration" to `8s` makes it scroll faster.
- [ ] **React Graph Connectivity:** Verify that React correctly mounts onto `div#crisp-portfolio-chart` and parses the CSV data without console errors.
- [ ] **Responsive Visual Test:** Resize the browser windows to verify card heights (`h-[380px] md:h-[400px]`) are uniform and look exactly like the Next.js local rendering on mobile, tablet, and desktop views.
