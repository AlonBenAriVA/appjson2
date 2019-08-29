from numpy.random import normal,binomial
import pandas as pd
import json

class appjson:
  data = pd.DataFrame({'x':normal(1,10,10),
                        'y':normal(2,10,10),
                        'name':['A','B','C','D','E','A','BB','CC','BB','BB'],
                        'aws':binomial(1,0.5,10) })
  def to_json(self):
    jsn = self.data.to_json(orient = 'records')
    with open('data.json','w') as f:
      json.dump(jsn,f, indent = 4)


app = appjson()                        
app.to_json()  

