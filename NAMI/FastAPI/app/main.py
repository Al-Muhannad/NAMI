from fastapi import FastAPI
import pickle
from pydantic import BaseModel
import json
app = FastAPI()
class Suggestion(BaseModel):
    City:int
    Month:int
    Temperature:float
    Humidity:float

with open('app/Plants_DeisionTree_Classifier.pkl','rb') as P:
    model=pickle.load(P)

@app.post('/')
def suggestions_endpoint(item:Suggestion):
    
    pred=model.predict([[int(item.City), int(item.Month), float(item.Temperature), float(item.Humidity)]])
    pred_Fix=("{'plants':"+str(pred)[2:-2]+'}').replace("'", '"')
    pred_JSON=json.loads(pred_Fix)
    
    return pred_JSON
