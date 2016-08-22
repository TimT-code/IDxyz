   //(function IDxyz(){
   var
      IDx=function(id){return document.getElementById(id)},//single id
      IDxs=function(id,valu){return document.getElementsByClassName(id)[valu]},//occurence of class name, or multiple class names with spaces between, all in quotes - IDxs('myclassName') - or muliple classes - IDxs('classname1 classname2 classname3') - IDxs('myClassNames','0') - same as document.getElementsByClassName('myClassNames')[0]; -- IE9+
      //IDxs-Maybe Add a loop to iterate thru the collection - instead of just one occurence.
      IDy=function(info){return document.querySelector(info)},//first occurence of a class, id, or element (in quotes) - IE8+
      IDy_all=function(info){return document.querySelectorAll(info)},//all occurences of a class, id, or element/tagname, use '*' for all elements (in quotes) - IE9+
      IDy_occ=function(info,occurence){return document.querySelectorAll(info)[occurence]},//specific occurence/number of a class, id, or element/tagname - IE9+ - example..... IDy_occ('p')[0]
      IDy_et=function(tagname){return document.getElementsByTagName(tagname)},//all specific tagnames (or multiple tag names separated by commas) - Use '*' for ALL tags
      IDy_eto=function(tagname){return document.getElementsByTagName(tagname)},//a specific occurrence of... from all tagnames - example1....first occurrence of an anchor tag - IDy_eto('a')[0] -- example2... a specific (4th) occurence from all tags - IDy_eto('*')[4] -  all tags
      IDz=function(id){return IDx(id).style},//same as document.getElementById(id).style - easy to remember as styleZ - IDz
      IDz_dno=function(id){return IDz(id).display='none'},
      IDz_din=function(id){return IDz(id).display='inline'},
      IDz_dib=function(id){return IDz(id).display='inline-block'},
      IDz_dbl=function(id){return IDz(id).display='block'},
      IDz_btm=function(id,valu){return IDz(id).bottom=valu+'px'},//set bottom position of a positioned element -- IDz_btm('exampleID', '100')
      IDz_c=function(id,valu){return IDz(id).color=valu},//red
      IDz_bg=function(id,valu){return IDz(id).background=valu},//all
      IDz_bgc=function(id,valu){return IDz(id).backgroundColor=valu},//blue
      IDz_bgi=function(id,valu){return IDz(id).backgroundImage=valu},//background-img src - url('URL')|none|initial|inherit
      IDz_b=function(id,valu){return IDz(id).border=valu},//solid 2px black
      IDz_bt=function(id,valu){return IDz(id).borderTop=valu},
      IDz_br=function(id,valu){return IDz(id).borderRight=valu},
      IDz_bb=function(id,valu){return IDz(id).borderBottom=valu},
      IDz_bl=function(id,valu){return IDz(id).borderLeft=valu},
      IDz_bc=function(id,valu){return IDz(id).borderCollapse=valu},//separate|collapse|initial|inherit
      IDz_bs=function(id,valu){return IDz(id).borderSpacing=valu},//has no effect if borderCollapse is set to 'collapse'
      IDz_bcl=function(id,valu){return IDz(id).borderColor=valu},//color|transparent|initial|inherit - up to 4 values - IDz_bcl('example', 'red orange blue purple')
      IDz_btc=function(id,valu){return IDz(id).borderTopColor=valu},
      IDz_brc=function(id,valu){return IDz(id).borderRightColor=valu},
      IDz_bbc=function(id,valu){return IDz(id).borderBottomColor=valu},
      IDz_blc=function(id,valu){return IDz(id).borderLeftColor=valu},
      IDz_bst=function(id,valu){return IDz(id).borderStyle=valu},//none|hidden|dotted|dash|solid|double|groove|ridge|inset|outset|initial|inherit
      IDz_bts=function(id,valu){return IDz(id).borderTopStyle=valu},
      IDz_brs=function(id,valu){return IDz(id).borderRightStyle=valu},
      IDz_bbs=function(id,valu){return IDz(id).borderBottomStyle=valu},
      IDz_bls=function(id,valu){return IDz(id).borderLeftStyle=valu},
      IDz_bw=function(id,valu){return IDz(id).borderWidth=valu},//thin|medium|thick|LENGTH|initial|inherit - use a word to set width, or use length units - IDz_bw('exampleID', '10px') 
      IDz_btw=function(id,valu){return IDz(id).borderTopWidth=valu},
      IDz_brw=function(id,valu){return IDz(id).borderRightWidth=valu},
      IDz_bbw=function(id,valu){return IDz(id).borderBottomWidth=valu},
      IDz_blw=function(id,valu){return IDz(id).borderLeftWidth=valu},
      IDz_w=function(id,valu){return IDz(id).width=valu+'px'},//adds px on to value
      IDz_h=function(id,valu){return IDz(id).height=valu+'px'},// ""
      IDz_p=function(id,valu){return IDz(id).padding=valu},//2px 10px 5px 3px
      IDz_pt=function(id,valu){return IDz(id).paddingTop=valu+'px'},
      IDz_pr=function(id,valu){return IDz(id).paddingRight=valu+'px'},
      IDz_pb=function(id,valu){return IDz(id).paddingBottom=valu+'px'},
      IDz_pl=function(id,valu){return IDz(id).paddingLeft=valu+'px'},
      IDz_m=function(id,valu){return IDz(id).margin=valu},//2px 10px 5px 3px
      IDz_mt=function(id,valu){return IDz(id).marginTop=valu+'px'},
      IDz_mr=function(id,valu){return IDz(id).marginRight=valu+'px'},
      IDz_mb=function(id,valu){return IDz(id).marginBottom=valu+'px'},
      IDz_ml=function(id,valu){return IDz(id).marginLeft=valu+'px'},
      IDz_ws=function(id,valu){return IDz(id).whiteSpace=valu},//normal|nowrap|pre|initial|inherit
      IDz_wsp=function(id,valu){return IDz(id).wordSpacing=valu+'px'},//normal|length|initial|inherit - number can be positive, or negative
      IDz_zi=function(id,valu){return IDz(id).zIndex=valu};//auto|number|initial|inherit - number can be positive, or negative
      
      //ltb_8='8px solid lightblue',//custom variables copied in - I'll leave em as an example
      //blk_2='2px solid black';// '' change semicolon to comma if not last item after uncomment..
      
   //}());
