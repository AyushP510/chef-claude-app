# 🍳 Chef Claude App

Chef Claude App is a React-based application that helps you turn a list of ingredients into creative recipes using Generative AI. Simply enter five or more ingredients, click a button, and let the AI suggest a recipe you can cook!

---

## 🚀 Features
- Add and manage a list of ingredients (minimum 5).
- Generate recipe suggestions powered by a GenAI model.
- Simple, clean React UI with responsive design.
- Extensible architecture for plugging in different AI models or APIs.

---

## 🛠️ Tech Stack
- **Frontend:** React
- **Styling:** CSS Components
- **GenAI API Used:** HuggingFace Inference API
- **GenAI Model Used:** deepseek-ai/DeepSeek-R1:novita
- **State Management:** React hooks (`useState`)

---

## ⚙️ Installation & Setup

1. **Clone the repo**
    ```bash
    git clone https://github.com/your-username/chef-claude-app.git
    cd chef-claude-app
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```
  

3. Configure environment variables
    - Create a .env file in the root directory.
    - Add your Hugging Face API key:

    ```bash
    REACT_APP_HUGGING_FACE_API_URL=https://router.huggingface.co/v1
    REACT_APP_HUGGING_FACE_API_TOKEN=your_token_here
    ```

4. Run the app
    ```
    npm start
    ```

5. Build for production
    ```
    npm run build
    ```

---

## 🖥️ Usage
- Enter at least 5 ingredients in the input field.
- Click "Generate Recipe".
- Wait for the AI to suggest a recipe.
- Enjoy cooking with inspiration from Chef Claude!

---

## 🧩 Future Improvements
- Add a backend and database to handle GenAI calls and other functionalities
- Add support for multiple GenAI providers (Claude, GPT, etc.).
- Save favorite recipes in a db.
- Add dietary filters (vegan, gluten-free, etc.).
- Enhance UI with animations and better error handling.

---

## 🤝 Contributing
Contributions are welcome!
- Fork the repo
- Create a feature branch (git checkout -b feature-name)
- Commit changes (git commit -m "Add feature")
- Push to branch (git push origin feature-name)
- Open a Pull Request







