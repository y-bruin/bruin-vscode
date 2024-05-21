# Bruin
Bruin is a unified analytics platform that enables data professionals to work end-to-end for their data pipelines. This extension is built to improve the development experience of data products on Bruin using Visual Studio Code.


## Features

- **Syntax Coloring**: Applies YAML syntax coloring to Bruin code in SQL files (enclosed between `/* @bruin ... @bruin */`) and Python files (enclosed between `""" @bruin ... @bruin """`).

    ![Screenshot of Syntaxe Coloring](https://github.com/bruin-data/bruin-vscode/blob/main/screenshots/syntaxe-coloring.png?raw=true)

- **Folding Range Provider**: Allows folding and unfolding Bruin code regions in SQL and Python files for a cleaner workspace. 

- **Auto Folding**: You can configure this setting by editing your through the Settings UI under Extensions > Bruin.

    ![Screenshot of Bruin Extension Settings](https://github.com/bruin-data/bruin-vscode/blob/main/screenshots/bruin_extension_settings.png?raw=true)


*Important Note*
	The Pylance extension, which provides advanced language support for Python, may affect the expected behavior of the auto-folding feature. If you encounter inconsistencies with code regions not folding as expected in python files, please review your Pylance settings. Adjusting these settings or temporarily disabling Pylance may help to resolve these issues. 


- **Dynamic SQL Content Viewer**: Renders SQL content within a VS Code Webview, enabling content copying, and automatically refreshing on file updates.

    ![Screenshot of Bruin Extension Features](https://github.com/bruin-data/bruin-vscode/blob/main/screenshots/bruin_extension_features.gif?raw=true)

- **Adapting to theme changes**: the SQL Content Viewer matches the vscode current theme (dark/light/Dark high contrast)

    ![Screenshot of SQL viewer Theme Updates](https://github.com/bruin-data/bruin-vscode/blob/main/screenshots/theme-updates.gif?raw=true)

**SQL Validation and Execution**: Introduces SQL validation and execution capabilities, including custom messages for invalid SQL queries and the ability to run SQL with additional flags such as `--downstream` and `--full-refresh` as well as date inputs.
	 **Date Inputs**:
		- Introduces date picker inputs for selecting start and end dates for `run` command.
		- Comes with `Exclusive End Date` checkbox, adjusting the end date to the end of the selected day (`23:59:59.999999999`).

![Screenshot of SQL Validation and Execution](https://github.com/bruin-data/bruin-vscode/blob/main/screenshots/validation-and-execution.gif?raw=true)

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view (Ctrl+Shift+X).
3. Search for "Bruin" and click Install.

 ***Note***:  Before using the new features, ensure that you have the Bruin CLI installed on your system. 
 For guidance on installing the Bruin CLI, please refer to the official documentation [link to documentation](https://github.com/bruin-data/bruin).

## Usage

- **Syntax Coloring**: Enclose Bruin code with delimiters:
	- In **SQL files** `/* @bruin` and `@bruin */`.
	- In **Python files** `""" @bruin` and `@bruin """`.

- **Folding Range**: Bruin code regions are automatically foldable.
- **Dynamic SQL Content Viewer**:
	1. Open any SQL file.
	2. Click the rocket icon 🚀 in the top right menu.
	3. A Webview will open, previewing the SQL content.
	4. Click the "Copy" icon to copy the content.
	5. The theme color of the view can match the vscode current theme (dark/light/Dark high contrast)
	6. The SQL Preview automatically responds to changes in checkboxes and dates, ensuring an immediate re-render.
	
**SQL Validation and Execution**:
    - **Validation**: Click the "Validate" button to validate the current SQL. A custom notification will appear based on the validation results.
    - **Run with Flags**: Click the "Run" button to execute the SQL command in an integrated terminal. This can include optional flags based on user input (checkboxes & date inputs).
        - **Start and End Dates**: 
			1. Select start and end dates using the date picker inputs to specify the time range for the run command.
			2. An "Exclusive End Date" checkbox is available. When checked, the end date is adjusted to the precise end of the selected day (`23:59:59.999999999`).
			3. The dates will be appended as flags directly to the Bruin run command 

## Release Notes

### Latest Release: v0.8.3

### Fixed
- The "Exclusive End Date" checkbox is now checked by default, with a reactive update for `endDateExclusive` to ensure it accurately reflects changes in `endDate`.

### Previous Highlights

### Version 0.8.2
- Previously, the `schedule` value in the asset details was consistently displayed as undefined. In this updated version, the schedule value has been fixed and is now dynamically updated.

### Version 0.8.1
- Added error handling for the "no such file or directory" (ENOENT) error when the `output` panel is clicked.

### Version 0.8.0
- Introduction of a new tab dedicated to rendering asset details, with dynamic updating for data.
- Integration of an alert message feature to provide clear feedback when data is unavailable for display.
- Display the asset name on the `General Tab` dynamically

### Version 0.7.x
- Clearly differentiated render errors and validation errors to eliminate confusion.
- Adjusted CSS for `run` and `validate` buttons for improved visual coherence and usability.
- Fixed extension activation issues for Snowflake, BigQuery SQL, and other languages.
- Enhanced validation error display and added expand functionality for error details.
- Resolved visual issues with icons and loading spinner within the validate button component.
- Transitioned from string-based lineage data handling to JSON parsing mechanism.
- Resized buttons and added separators for better visual hierarchy.
- Integrated dropdown menus for streamlined command execution.

#### 0.6.x
- Improved SQL preview visibility in non-Bruin assets.
- Resolved functionality issues on Windows platforms.
- Updated webview with tabbed interface for General and Asset Lineage tabs.

#### 0.5.0
- Added line numbers to SQL preview for better code review and debugging.

#### 0.4.x
- Various fixes and improvements including rendering, responsiveness, and CSS adjustments.

#### 0.3.0
- Added Windows compatibility and automatic workspace directory detection.

#### 0.2.x
- Implemented SQL validation functionality with conditional flags.
- Fixed auto folding issues and improved error message handling.

#### 0.1.x
- Introduced auto-folding settings and resolved compatibility issues.
- Launched with syntax coloring, code folding, and dynamic SQL content viewer.

### How to Update

To update to the latest version, search for "Bruin" in the Extensions Marketplace and click the Update button.