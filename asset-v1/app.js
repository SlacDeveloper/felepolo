/** Generated by sealldevelopers app.js generator **/
var app=new function(){this.name="Noeda",this.version="1",this.date="2024",this.folder="asset-v1/",this.looptime=5000,this.bpm=160,this.totalframe=240,this.nbpolo=7,this.nbloopbonus=6,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=27,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#000000",this.col0="#000000",this.col1="#636363",this.col2="#000000",this.col3="#000000",this.col4="#000000",this.animearray=[{name:"kick",color:"1500ff",uniqsnd:!0},{name:"snare",color:"1500ff",uniqsnd:!0},{name:"bong",color:"1500ff",uniqsnd:!0},{name:"clack",color:"1500ff",uniqsnd:!0},{name:"clap",color:"1500ff",uniqsnd:!0},{name:"dorodoo",color:"60e6f0",uniqsnd:!0},{name:"hmmm",color:"60e6f0",uniqsnd:!0},{name:"amen",color:"c24747",uniqsnd:!0},{name:"clock",color:"c24747",uniqsnd:!0},{name:"Cymbal",color:"c24747",uniqsnd:!0}],this.bonusarray=[{name:"rapgod",src:"v1-b1-choir-hb-hd.webm",code:"1,2,8",sound:"bonus-rapgod"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};