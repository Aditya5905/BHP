# 🏠 House Price Prediction

This project predicts housing prices in Bangalore using a dataset of real estate listings. It involves data cleaning, feature engineering, and model training to estimate prices based on property features such as location, size, and number of bedrooms/bathrooms.

---

## 📊 Dataset Overview

**Source:** `Bengaluru_House_Data.csv`  
This dataset contains features like:
- `location`
- `total_sqft`
- `bath`
- `balcony`
- `price`
- `area_type`
- `availability`

---

## 📦 Technologies Used

- **Python**
- **Pandas** for data manipulation
- **NumPy** for numerical computations
- **Matplotlib & Seaborn** for visualization
- **Scikit-learn** for modeling
- **Jupyter Notebook** for development

---

## 🔍 Key Steps

1. **Data Cleaning**
   - Dropping irrelevant columns (`area_type`, `society`, etc.)
   - Handling missing values
   - Converting textual sqft values to numerical
   - Removing outliers

2. **Feature Engineering**
   - Extracting number of BHKs from `size`
   - One-hot encoding for categorical data like `location`

3. **Model Building**
   - Splitting data into training and test sets
   - Training a regression model (e.g., Linear Regression)
   - Evaluating model performance

---


## 🚀 Future Improvements

- Use a more robust ML model (e.g., Random Forest, XGBoost)
- Add Streamlit UI for user input
- Use clustering for better location-based predictions
- Deploy to web/cloud

---

## 🙌 Acknowledgements

- Dataset: Kaggle
- Tutorial inspiration from real-estate ML blogs and guides

---

## 📬 Contact

**Author**: Aditya Kumar Sahoo  
📧 Email: _aditya05raja@gmail.com_  
🔗 GitHub: [github.com/Aditya5905](https://github.com/Aditya5905)
