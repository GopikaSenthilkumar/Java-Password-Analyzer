# Password Strength Analyzer

A modern, dark-themed web application that checks password strength in real-time using JavaScript with a sleek, responsive UI.

## Current State and Issues

This project is primarily a client-side password analyzer with:
- A fully functional frontend implementation (HTML/CSS/JavaScript)
- Spring Boot configuration files (partial configuration)

**Known Issues:**
- The Spring Boot backend has not been fully integrated due to Maven configuration issues
- The POM.xml file has encoding issues that prevent proper Maven build

## Features

* **Sleek Dark Theme** with cyan accents and glowing elements
* **Real-time Password Strength Analysis**
* **Visual Strength Indicators** with color-coded feedback
* **Comprehensive Requirement Checklist** (basic and advanced)
* **Mobile-responsive Design**
* **Modern UI** with Font Awesome icons

## Running the Application

### Option 1: Direct HTML (Recommended)

Simply open the `src/main/resources/static/index.html` file in your web browser. All functionality is client-side.

### Option 2: Using Python's HTTP Server

1. Open Command Prompt or PowerShell
2. Navigate to the static directory:  
```  
cd path/to/password-analyzer/src/main/resources/static  
```
3. Run Python's built-in HTTP server:  
```  
python -m http.server 4000  
```
4. Open your browser and navigate to: `http://localhost:4000`

## Password Analysis Criteria

### Basic Requirements
* Minimum 12 characters
* At least one uppercase letter
* At least one lowercase letter
* At least one number
* At least one special character

### Advanced Security Checks
* No three consecutive same characters
* No sequential patterns (abc, 123)
* No common words or patterns
* Extra strong length (14+ characters)
* Multiple special characters and numbers

## Technologies Used
* HTML5
* CSS3 with Flexbox/Grid
* Vanilla JavaScript
* Font Awesome icons
* Spring Boot configuration files (not currently active)

## Future Improvements

* Fix Maven and Spring Boot integration for backend functionality
* Add password persistence and history features
* Implement user accounts for saving preferred password rules
* Add comprehensive password dictionary checking 