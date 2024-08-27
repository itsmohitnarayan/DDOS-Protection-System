import joblib

model = joblib.load('model.pkl')
result = model.predict(new_data)
