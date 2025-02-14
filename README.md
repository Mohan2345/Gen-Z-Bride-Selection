## Gen-Z BRIDE SELECTION

A React-based dashboard for controlling toggle switches with dynamic functionality. The app ensures that at least 2 switches are always active and allows users to toggle switches while maintaining this rule.

Features
Dynamic Switch Control:

At least 2 switches are always active.

When a switch is turned off, another switch is automatically turned on.

When a switch is turned on and 2 switches are already active, one of the active switches is turned off.

User-Friendly UI:

Clean and modern design using Tailwind CSS.

Toggle switches represented with React Icons.

Responsive Design:

Works seamlessly on all screen sizes.

Technologies Used
React: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for styling.

React Icons: A library for adding icons to the project.

React Router DOM: For navigation (if routing is required).

Installation
Follow these steps to set up the project locally:

Clone the Repository:

bash
Copy
git clone https://github.com/Mohan2345/
Gen-Z-Bride-Selection.git
cd fun
Install Dependencies:

bash
Copy
npm install
Run the Project:

bash
Copy
npm run dev
Open in Browser:

Visit http://localhost:3000 to view the app.

Project Structure
Copy
toggle-switch-dashboard/
├── components/
│   └── fun.jsx          # ToggleSwitches component
├── pages/
│   └── home.jsx         # Main layout and rendering logic
├── public/
├── styles/
├── README.md            # Project documentation
└── package.json         # Project dependencies and scripts
How It Works
Initial State
At the time of rendering, 2 switches are on, and 1 switch is off.

Toggle Logic
Turning On a Switch:

If 2 switches are already active, turning on a third switch will turn off one of the active switches.

Turning Off a Switch:

If a switch is turned off, another switch is automatically turned on to ensure at least 2 switches remain active.

Example Scenarios
Initial State:

Beautiful and Dahej are on.

Seal Packed is off.

Turn On Seal Packed:

One of the active switches (Beautiful or Dahej) is turned off, and Seal Packed is turned on.

Turn Off Dahej:

Dahej is turned off, and Seal Packed is turned on (if it was off).

Customization
Add More Switches:

To add more switches, update the switches state in fun.jsx and add corresponding UI elements.

Change Icons:

Replace FaToggleOn and FaToggleOff with other icons from React Icons.

Styling:

Modify the Tailwind CSS classes in the components to change the appearance.

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Push your branch and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Developed By
Deepak Kumar Bastia

