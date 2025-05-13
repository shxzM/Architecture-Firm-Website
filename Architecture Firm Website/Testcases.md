# Test Cases - Tashdid Architects Website

## Public Website Test Cases

### Navigation Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-001 |
| Test Title | Desktop Navigation Menu Functionality |
| Preconditions | Website is loaded and accessible |
| Test Steps | 1. Load the website<br>2. Verify all menu items are visible<br>3. Click each menu item<br>4. Verify navigation to correct pages |
| Test Data | Menu items: Home, Projects, Services, About Us, Contact |
| Expected Result | All menu items should be visible and correctly navigate to their respective pages |
| Actual Result | All menu items are visible and correctly navigated to their respective pages|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-002 |
| Test Title | Mobile Navigation Menu (Hamburger) |
| Preconditions | Website is loaded on a mobile device or mobile view |
| Test Steps | 1. Load the website<br>2. Verify hamburger menu is visible<br>3. Click hamburger menu<br>4. Verify all menu items appear<br>5. Click each menu item<br>6. Verify navigation to correct pages |
| Test Data | Menu items: Home, Projects, Services, About Us, Contact |
| Expected Result | Hamburger menu should open, show all items, and correctly navigate to respective pages |
| Actual Result | Hamburger is visible on mobile and opens the menu, shows all the items and correctly navigate to the respective pages|
| Status | Passed|
| Remarks | |

### Home Page Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-003 |
| Test Title | Featured Projects Slider |
| Preconditions | Home page is loaded |
| Test Steps | 1. Load home page<br>2. Verify slider is visible<br>3. Check if projects are displayed<br>4. Click navigation arrows<br>5. Click on a project in slider |
| Test Data | Featured projects from database |
| Expected Result | Slider should show projects, navigate smoothly, and clicking a project should open its details |
| Actual Result | Slider shows projects, navigates smoothly, and clicking a project is opening its details|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-004 |
| Test Title | Home Page Navigation Buttons |
| Preconditions | Home page is loaded |
| Test Steps | 1. Load home page<br>2. Locate all navigation buttons<br>3. Click each button<br>4. Verify navigation to correct paths |
| Test Data | Navigation buttons:<br>- View Projects<br>- Our Services<br>- Contact Us<br>- About Us |
| Expected Result | Each button should navigate to its respective section or page |
| Actual Result | Clicking each button navigates to it's respective page|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-004.1 |
| Test Title | Home Page Contact Form - Complete Submission |
| Preconditions | Home page is loaded |
| Test Steps | 1. Scroll to contact form at bottom of home page<br>2. Fill in all required fields:<br>   - Name<br>   - Email<br>   - Phone<br>   - Location<br>   - Budget<br>   - Message<br>3. Click submit button<br>4. Verify form submission<br>5. Check admin panel for new message |
| Test Data | Valid contact form data:<br>- Name: "John Doe"<br>- Email: "john@example.com"<br>- Phone: "1234567890"<br>- Location: "New York"<br>- Budget: "100000"<br>- Message: "Test message" |
| Expected Result | 1. Form should submit successfully<br>2. Success message should appear<br>3. Message should appear in admin panel |
| Actual Result | 1. Form submits successfully<br>2. Success message appears as an alert<br>3. Message appears in admin panel|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-004.2 |
| Test Title | Home Page Contact Form - Incomplete Submission |
| Preconditions | Home page is loaded |
| Test Steps | 1. Scroll to contact form at bottom of home page<br>2. Fill in only some required fields<br>3. Click submit button<br>4. Verify validation messages<br>5. Try different combinations of missing fields |
| Test Data | Test cases:<br>1. Empty form<br>2. Only name filled<br>3. Only email filled<br>4. Missing phone<br>5. Missing location<br>6. Missing budget<br>7. Missing message |
| Expected Result | 1. Form should not submit<br>2. Error messages should appear for missing fields<br>3. No message should be sent to admin<br>4. Form should remain on page with entered data |
| Actual Result | 1. Form is not submitting<br>2. Error messages is appearing for missing fields<br>3. No message should be sent to admin<br>4. Form should remain on page with entered data|
| Status | |
| Remarks | |

### Projects Page Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-005 |
| Test Title | Project Grid Display |
| Preconditions | Projects page is loaded |
| Test Steps | 1. Load projects page<br>2. Verify project grid layout<br>3. Check if all projects are displayed<br>4. Verify project card information |
| Test Data | Projects from database |
| Expected Result | Projects should be displayed in a grid with correct information (image, title, location, type) |
| Actual Result | |
| Status | |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-006 |
| Test Title | Project Card Click Functionality |
| Preconditions | Projects page is loaded |
| Test Steps | 1. Load projects page<br>2. Click on a project card<br>3. Verify navigation to project details |
| Test Data | Any project card |
| Expected Result | Clicking a project card should navigate to its detailed view |
| Actual Result | |
| Status | |
| Remarks | |

### Project Details Page Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-007 |
| Test Title | Project Image Gallery |
| Preconditions | Project details page is loaded |
| Test Steps | 1. Load project details page<br>2. Verify all project images are displayed<br>3. Click on an image<br>4. Verify full-screen view<br>5. Click outside image to close |
| Test Data | Project images |
| Expected Result | Images should display in gallery, open in full-screen on click, and close properly |
| Actual Result | |
| Status | |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-008 |
| Test Title | Featured Projects Section |
| Preconditions | Project details page is loaded |
| Test Steps | 1. Load project details page<br>2. Scroll to featured projects section<br>3. Verify featured projects are displayed<br>4. Click on a featured project |
| Test Data | Featured projects (excluding current project) |
| Expected Result | Should show 3 random projects and navigate to their details when clicked |
| Actual Result | |
| Status | |
| Remarks | |

### Contact Page Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-009 |
| Test Title | Contact Form Validation |
| Preconditions | Contact page is loaded |
| Test Steps | 1. Load contact page<br>2. Try submitting empty form<br>3. Enter invalid email<br>4. Enter valid data<br>5. Submit form |
| Test Data | Test cases:<br>- Empty form<br>- Invalid email<br>- Valid data |
| Expected Result | Form should validate inputs and only submit with valid data |
| Actual Result | |
| Status | |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-010 |
| Test Title | Contact Form Submission |
| Preconditions | Contact page is loaded with valid data |
| Test Steps | 1. Fill in all required fields<br>2. Click submit button<br>3. Verify submission message |
| Test Data | Valid contact form data |
| Expected Result | Form should submit successfully and show confirmation message |
| Actual Result | |
| Status | |
| Remarks | |

### Footer Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-011 |
| Test Title | Footer Links Functionality |
| Preconditions | Any page is loaded |
| Test Steps | 1. Scroll to footer<br>2. Click each footer link<br>3. Verify navigation |
| Test Data | Footer links (Privacy Policy, Terms of Service, etc.) |
| Expected Result | All footer links should navigate to correct pages |
| Actual Result | |
| Status | |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-012 |
| Test Title | Social Media Links |
| Preconditions | Any page is loaded |
| Test Steps | 1. Scroll to footer<br>2. Click each social media icon<br>3. Verify new tab opens<br>4. Verify correct social media page loads |
| Test Data | Social media links |
| Expected Result | Social media links should open in new tabs and load correct pages |
| Actual Result | |
| Status | |
| Remarks | |

### Responsive Design Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-013 |
| Test Title | Mobile Responsiveness |
| Preconditions | Website is accessible |
| Test Steps | 1. Open website on mobile device<br>2. Check all pages<br>3. Verify layout and functionality<br>4. Test touch interactions |
| Test Data | Mobile device or mobile view |
| Expected Result | Website should be fully functional and properly formatted on mobile devices |
| Actual Result | |
| Status | |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-014 |
| Test Title | Tablet Responsiveness |
| Preconditions | Website is accessible |
| Test Steps | 1. Open website on tablet<br>2. Check all pages<br>3. Verify layout and functionality<br>4. Test touch interactions |
| Test Data | Tablet device or tablet view |
| Expected Result | Website should be fully functional and properly formatted on tablets |
| Actual Result | |
| Status | |
| Remarks | |

### Performance Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-015 |
| Test Title | Page Load Time |
| Preconditions | Website is accessible |
| Test Steps | 1. Clear browser cache<br>2. Load each page<br>3. Measure load time<br>4. Check image loading |
| Test Data | All website pages |
| Expected Result | Pages should load within 3 seconds, images should load progressively |
| Actual Result | |
| Status | |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-016 |
| Test Title | Image Optimization |
| Preconditions | Website is loaded |
| Test Steps | 1. Load pages with images<br>2. Check image quality<br>3. Verify responsive images<br>4. Test different screen sizes |
| Test Data | All website images |
| Expected Result | Images should be optimized, load quickly, and display correctly at all sizes |
| Actual Result | |
| Status | |
| Remarks | |
