import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
    
    defaultTemplate = [{"content":{"icon":{"name":"Profile icon","type":"img","label":false,"show":true,"position":{"x":"-10","y":"0"},"size":{"width":80,"height":80}},"name":{"name":"Summoner name","type":"string","label":false,"show":true,"position":{"x":70,"y":-80},"size":{"width":150,"height":30}},"summonerLevel":{"name":"Level","type":"numeric","show":true,"label":true,"position":{"x":"70","y":"-80"},"size":{"width":150,"height":30}}},"name":"Summoner","type":"block","label":false,"show":true,"position":{"x":"-5","y":"0"},"size":{"width":260,"height":85}},{"content":{"RANKED_FLEX_SR":{"content":{"winrate":{"type":"numeric","name":"Winrate"},"leagueName":{"type":"string","name":"League name"},"wins":{"type":"numeric","name":"Wins"},"leaguePoints":{"type":"numeric","name":"League points"},"losses":{"type":"numeric","name":"Losses"},"games":{"type":"numeric","name":"Games"},"rank":{"type":"string","name":"Rank"},"tier":{"type":"string","name":"Tier"},"image":{"type":"img","name":"Rank image"}},"type":"block","name":"Ranked Flex 5x5"},"RANKED_SOLO_5x5":{"content":{"winrate":{"type":"numeric","name":"Winrate","show":true,"position":{"x":"115","y":"-160"},"label":true},"leagueName":{"type":"string","name":"League name"},"wins":{"type":"numeric","name":"Wins"},"leaguePoints":{"type":"numeric","name":"League points","show":true,"label":true,"position":{"x":"115","y":"-140"}},"losses":{"type":"numeric","name":"Losses"},"games":{"type":"numeric","name":"Games","show":true,"label":true,"position":{"x":"115","y":"40"}},"rank":{"type":"string","name":"Rank","show":true,"position":{"x":225,"y":-180},"size":{"width":50,"height":20}},"tier":{"type":"string","name":"Tier","show":true,"position":{"x":115,"y":-200},"size":{"width":105,"height":20}},"image":{"type":"img","name":"Rank image","show":true,"position":{"x":"-20","y":"-55"},"size":{"width":140,"height":140}}},"type":"block","name":"Ranked Solo 5x5","show":true,"position":{"x":"5","y":"5"},"label":true},"RANKED_FLEX_TT":{"content":{"winrate":{"type":"numeric","name":"Winrate"},"leagueName":{"type":"string","name":"League name"},"wins":{"type":"numeric","name":"Wins"},"leaguePoints":{"type":"numeric","name":"League points"},"losses":{"type":"numeric","name":"Losses"},"games":{"type":"numeric","name":"Games"},"rank":{"type":"string","name":"Rank"},"tier":{"type":"string","name":"Tier"},"image":{"type":"img","name":"Rank image"}},"type":"block","name":"Ranked Flex 3x3"}},"type":"block","name":"League","show":true},{"content":{"masteriesList":{"content":{"content":{"championPointsUntilNextLevel":{"type":"numeric","name":"Points to next level"},"championId":{"type":"numeric","name":"Champion Id"},"championIcon":{"type":"img","name":"Champion icon","show":true,"position":{"x":"-5","y":"0"},"size":{"width":75,"height":75}},"chestGranted":{"type":"numeric","name":"Chest granted","show":false,"position":{"x":"55","y":"-75"},"size":{"width":5,"height":15}},"championLevel":{"type":"numeric","name":"Mastery level"},"championName":{"type":"string","name":"Champion name"},"championPoints":{"type":"numeric","name":"Mastery points"},"image":{"type":"img","name":"Icon","show":true,"size":{"width":35,"height":35},"position":{"x":"17","y":"-17"}}},"type":"block","name":"Mastery","show":true,"position":{"x":"0","y":"0"},"size":{"width":80,"height":95}},"type":"list","name":"Masteries list","show":true}},"type":"block","name":"Masteries","show":true,"size":{"width":80,"height":95}}]
    currentTemplate = []
    
  constructor() {
      this.currentTemplate = JSON.parse(this._getCookie("currentTemplate"))
  }
    
    useDefaultTemplate(){
        this.currentTemplate = this.defaultTemplate
    }
    
    add(schema){
        console.log(schema)
        let sch = JSON.parse(JSON.stringify(schema))
        this.currentTemplate.push(sch)
        console.log( this.currentTemplate)
    }
    delete(template){
        this.currentTemplate.splice(this.currentTemplate.indexOf(template),1)
    }
    
    saveTemplate(){
        console.log(this.currentTemplate)
        this._setCookie("currentTemplate",this.currentTemplate,9999)
        console.log(this._getCookie("currentTemplate") == JSON.stringify(this.currentTemplate))
    }
    
  // Coockie
  _setCookie(name: string, value, expireDays: number = 365, path: string = '/') {
    if (typeof value == "object") value = JSON.stringify(value)
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
      console.log(value)
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  _getCookie(name: string) {
    let cookies: Array<string> = document.cookie.split(';');
    let cookieName = `${name}=`;
    let cookie: string;

    for (let i = 0; i < cookies.length; i++) {
      cookie = cookies[i].replace(/^\s+/g, '');
      if (cookie.indexOf(cookieName) == 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null
  }
}
