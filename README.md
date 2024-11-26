# 🚲 Famous Markus’ Bike Shop - Configurator

This is a bike configurator application. The app allows users to customize various parts of a bike, such as the frame, finish, wheels, and rims, with real-time price updates.
You can check [The Site Preview](https://markus-bike-shop.netlify.app/)

🛠️ **Development Phases**

1. **Research**

   - Researched similar product configurator websites to analyze various user experiences (UX) and identify the most efficient approach for the end user.
   - Analyzed potential compatibility restrictions between features, defining how they could be managed in a flexible and scalable way.

2. **Planning**

   - Used Notion to create a detailed plan with tasks divided into blocks.
   - Link to the planning in Notion: [Planning in Notion](https://gusty-cadmium-c56.notion.site/14509a7b6709806ea387fdc0bef3166e?v=4b7d0061ba9c415b8e033954f0ef6494).

3. **Implementation**
   - **Technologies and Tools**:
     - Developed the application using React with TypeScript as the main language and Vite for project initialization.
     - Implemented the React Context API for managing the global state of the application, allowing efficient handling of user selections.
     - Created a custom hook for the bike configuration logic, centralizing functionality and simplifying the code.
     - Styled the application using plain CSS, but with CSS Modules to avoid class name conflicts.

## 🎨 Design & Inspiration

For the design, I took inspiration from **Factorial**, focusing on simplicity and user experience. Here are some key design elements:

- **Buttons** and **dropdowns** that resemble the ones used on Factorial's website.
- **CSS variables** were used to match the color scheme found on their platform.
- Created a **custom logo** for the bike shop using Factorial's original color.

## 🔧 Features

- **Bike Configurator**: Allows users to select and customize different bike parts.
- **Real-time Price Calculation**: Price updates dynamically as users make selections.
- **Dynamic Image Updates**: The bike's image changes based on the selected frame finish, giving users a visual preview of their custom bike.
- **Compatibility Rules**: The app prevents invalid combinations, ensuring that selected parts are compatible with each other.

## 💡 Future Improvements

1. Images:
   If I had more time, I would have extended the app to handle all possible combinations dynamically, like this:

```js
`./img/${frame}_${finish}_${wheel}_${rims}_${chains}`;
```

This would allow for a more complete image URL generation that includes all features chosen by the user.

2. Testing:
   I would write unit tests and integration tests using Jest and React Testing Library to ensure the app's components and features work as expected.

3. Backend Integration:
   Instead of using mock data for the submit action, I would integrate a real backend API to handle the submission of the configuration, allowing users to persist their bike configurations or even place an order. The backend API can be found in the Markus Bike Shop API repository.

## 🛠️ Challenges & Learning

When I started working on this project, I had no prior experience with Ruby on Rails, so I had to learn it from scratch to build the backend. Initially, I estimated that implementing the backend would be a simpler task compared to the frontend, but honestly, it turned out to be more challenging than I expected. 😅

I faced several difficulties in getting the backend up and running, and unfortunately, it didn’t turn out quite as I had hoped. Despite this, I gained valuable experience working with Rails, and I’m motivated to continue learning and improving my skills in Ruby.

I’ve learned a lot through the process, and I’m excited to keep improving in Ruby on Rails as I continue to grow as a developer. 😊


## 🚀 How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/seguramaria/markus-bike-shop.git
cd /markus-bike-shop
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
Open the app in your browser at http://localhost:5173/
```

### 🔧 Using Mock Data (Preview Mode)

By default, the app uses mock data to provide a preview of the bike configurator. This allows you to test the configurator without needing to run the backend.

### 🔌 Using the Real Backend

If you'd like to use the real backend to fetch data, you need to clone and run the [Markus Bike Shop API repository](https://github.com/seguramaria/markus-bike-shop-api). Follow these steps:

1. Clone the Markus Bike Shop API repository:

   ```bash
   git clone https://github.com/seguramaria/markus-bike-shop-api.git
   cd markus-bike-shop-api
   ```

2. Run the backend server:

   ```bash
   rails server
   ```

3. Once the server is running, modify the `useMockData` flag in the configuration of the bike configurator project (in the frontend code) from `true` to `false`:
   ```js
   // Set useMockData to true to use mock data for previewing the bike configurator.
   // If you want to test the backend, make sure to run the Markus Bike Shop API project
   // and set useMockData to false to fetch data from the live API.
   const useMockData = false;
   ```

This will allow you to fetch data from the live API, providing a more accurate representation of the configurator's functionality.
