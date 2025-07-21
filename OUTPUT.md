## Changes Made

### Hooks: useIsMobile.ts

1. File Naming Convention.
	**Issue:** 
      * The file name was use-mobile.ts.
	**Fix:**
      * According to React conventions, hook filenames should use camelCase (e.g., useIsMobile.ts) to match the hook function name and maintain consistency.
2. Unnecessary Complexity and Compatibility Issues
	**Issue**:
	   * It was using matchMedia but still relied on window.innerWidth, defeating the main benefit of matchMedia.
	   * MediaQueryList.addEventListener() is not supported in all browsers (notably Safari). The older .addListener() would be required for compatibility.
	**Fix:**
      * Switched to a resize event listener using window.innerWidth, which is simple, browser-compatible, and sufficient for responsive behavior.
      * Avoided the use of matchMedia altogether for improved maintainability and cross-browser support.
3. Unclear Type Handling
   **Issue**:
      * The state was initialized as boolean | undefined, and the return value was coerced with !!isMobile, which added unnecessary ambiguity.
   **Fix:**
      * Initialized the state with false and returned a clean boolean type (useState<boolean>(false)), improving code clarity and eliminating the need for type coercion.
4. Improved Initialization Logic
   **Issue:**
      * In the original version, setIsMobile() was called only once inside the effect without listening to actual window resizes.
   **Fix:**
      * Immediately called handleResize() within the effect to set the correct initial state, ensuring accurate detection even on first render.

### Global Application (App.tsx)
1. Scattered UI and Inconsistent Structure
   **Issue:**
      * All major elements were declared inline without component separation.
   **Fix:**
      * Split into Header, Hero, SearchBar, and TagList components for better reusability and readability.
2. Unstructured Page Roles
   **Issue:**
      * No role was assigned to the main section of the app.
   **Fix:**
      * Added role="main" to <main> for assistive technologies.

### Header.tsx
1. Lack of Responsive Behavior
   **Issue:**
      * Elements overflowed or disappeared on small screens.
   **Fix:**
      * Added a responsive mobile menu using menuOpen state and conditional rendering with Tailwind sm: utilities.
2. Accessibility Issues
   **Issue:**
      * Missing aria-labels on buttons and search inputs.
   **Fix:**
      * Added aria-label="Toggle menu" for hamburger menu and aria-label="Header search" for search fields.
3. Visual Clarity and Layout
   **Issue:**
      * Items cramped together, inconsistent spacing on mobile and desktop.
   **Fix:**
      * Applied gap-*, sm:*, pl-*, and consistent layout utilities (px-4 sm:px-6, among others).

### TagList.tsx
1. No Semantic Tag or Landmark
   **Issue:**
      * The root layout did not declare a semantic landmark role, which limits navigational clarity for users relying on assistive technologies like screen readers.
      * Without a role="main", screen readers cannot easily identify the primary content of the page.
   **Fix:**
      * Added role="main" to the <main> element to explicitly define the main content region of the application.
      * Improves accessibility by allowing screen readers and assistive tools to quickly skip to the primary content, enhancing user experience for keyboard and non-visual users.
2. Unstructured Repeated Tags for
   **Issue:**
      * Tags were repeated in raw divs without clear markup.
   **Fix:**
      * Used <ul><li> structure for tags, which is better for screen readers and organization.
3. Non-Responsive Spacing
   **Issue:**
      * Tags wrapped unevenly or were clipped on small screens.
   **Fix:**
      * Added flex-wrap, gap-3, px-4 sm:px-6 for consistent responsiveness.

### SearchBar.tsx
1. Non-Responsive Layout
   **Issue:**
      * Layout broken for small screens.
   **Fix:**
      * Used flex-col sm:flex-row with mt-2 sm:mt-0 and w-full sm:w-auto for responsive form layout.
2. Unnecessary DOM Re-renders
   **Issue:**
      * The SearchBar component had multiple useEffect hooks updating and syncing the initialValue and value state.
      * This caused unnecessary re-renders every time initialValue changed even when it hadn’t actually changed and re-triggered the onSearch callback on every character typed (via useEffect on value), which may not be needed for every keystroke.
   **Fix:**
      * Removed the useEffect that auto-called onSearch(value) on every value change and instead only called onSearch on form submission (when the "Search" button is clicked or Enter is pressed).
      * Simplified the syncing logic: if the initialValue changes, we now update the internal state only once without triggering onSearch again until the user takes action.
      * This reduces performance overhead by preventing unnecessary render and callback executions.
3. Missing Accessibility Roles
   **Issue:**
      * Form had no role or labels for screen readers.
   **Fix:**
      * Added role="search" and aria-label="Search input".

### Hero.tsx
1. Missing Semantics and Accessibility
   **Issue:**
      * Image lacked alt text. Section lacked accessible description.
   **Fix:**
      * Added alt attribute to hero image and aria-label="Hero section..." on the wrapper.

