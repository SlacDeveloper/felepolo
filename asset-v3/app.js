/** Generated by sealldevelopers app.js generator **/
var app=new function(){this.name="Why",this.version="2",this.date="2024",this.folder="asset-v3/",this.looptime=3e3,this.bpm=160,this.totalframe=144,this.nbpolo=7,this.nbloopbonus=6,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=27,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#000000",this.col0="#ffffff",this.col1="#009764",this.col2="#3cd3a0",this.col3="#3cd3a0",this.col4="#3cd3a0",this.animearray=[{name:"kick",color:"b47d20",uniqsnd:!0},{name:"snare",color:"b47d20",uniqsnd:!0},{name:"turu",color:"b47d20",uniqsnd:!0},{name:"pucou",color:"b47d20",uniqsnd:!0},{name:"hmm",color:"af4512",uniqsnd:!0},{name:"ouhmm",color:"af4512",uniqsnd:!0},{name:"tugele",color:"3cd3a0",uniqsnd:!0},{name:"cring",color:"ed371f",uniqsnd:!0},{name:"hehe",color:"ed371f",uniqsnd:!0},{name:"tangalam",color:"ed371f",uniqsnd:!0}],this.bonusarray=[{name:"Chaos",src:"bonus.webm",code:"1,2,3,5,7",sound:"bonus_chaos",aspire:"aspire"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};