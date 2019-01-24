import { Injectable } from '@angular/core';

const BASE_URL = "http://canisback.com:8080/"

const TYPES = ["Summoner","League","Masteries","Matchlist"]

@Injectable({
  providedIn: 'root'
})
export class DataService {
    
    _data = []
    _schemas = []
    types
  constructor() {
    this.loadSchemas()
      this.types = TYPES
  }
    
    loadSchemas(){
    //Loading schemas
        TYPES.forEach(function (value) {
            this.getData(BASE_URL + "schema/" + value.toLowerCase()).then(schema => {
              this._schemas[value] = schema
                //console.log(this.get_schema(value))
            }).catch(err => {
              console.error(err)
            })
        }.bind(this));
    }
    
    loadData(region, summoner){
        
        //Loading data
            TYPES.forEach(function (value) {
                this.getData(BASE_URL + "data/" + region + "/" + summoner + "/" + value.toLowerCase()).then(schema => {
                  this._data[value] = schema
                    //console.log(this.get_data(value))
                }).catch(err => {
                  console.error(err)
                })
            }.bind(this));

        
    }
    /* Working meh... cause need to wait for the data to load or something like that
    get_data(type){
        return {"type": "block", "content": {"icon": {"type": "img", "value": "http://ddragon.canisback.com/latest/img/profileicon/3533.png", "name": "Profile icon"}, "summonerLevel": {"type": "numeric", "value": 129, "name": "Level"}, "name": {"type": "string", "value": "ODS Saig", "name": "Summoner name"}}, "name": "Summoner"}
        return this._data[type]
    }
    
    get_schema(type){
        return this._schemas[type]
    }*/

  getData(url): any  {
    return new Promise((resolve, reject) => {
      fetch(url).then(response => {
        if (response.ok) {
          response.json().then(res => {resolve(res)}).catch(err => reject(err))
        } else {
          reject(response)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}
