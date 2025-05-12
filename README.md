# Password Strength Analyzer

A modern, dark-themed web application that checks password strength in real-time using JavaScript with a sleek, responsive UI.

## Features

* **Sleek Dark Theme** with cyan accents and glowing elements
* **Real-time Password Strength Analysis**
* **Visual Strength Indicators** with color-coded feedback
* **Comprehensive Requirement Checklist** (basic and advanced)
* **Mobile-responsive Design**
* **Modern UI** with Font Awesome icons

## Running the Application

There are several ways to run this application:

### Option 1: Direct HTML (Simplest)

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

### Option 3: Using Spring Boot

1. Open Command Prompt
2. Navigate to the project directory:  
```  
cd path/to/password-analyzer  
```
3. Run using Maven:  
```  
mvn spring-boot:run  
```
4. Navigate to: `http://localhost:4000`

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
* Spring Boot (backend)

## Prerequisites

* Web browser (Chrome, Firefox, Edge, etc.)
* For server options: Python or Java 17+ (depending on which method you choose)
* Maven (for Spring Boot option) 