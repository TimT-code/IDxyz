   //(function IDxyz(){
   var
      IDx=function(id){return document.getElementById(id)},
      IDz=function(id){return IDx(id).style},
      IDz_dno=function(id){return IDz(id).display='none'},
      IDz_din=function(id){return IDz(id).display='inline'},
      IDz_dib=function(id){return IDz(id).display='inline-block'},
      IDz_dbl=function(id){return IDz(id).display='block'},
      IDz_b=function(id,valu){return IDz(id).border=valu},
      IDz_bt=function(id,valu){return IDz(id).borderTop=valu},
      IDz_br=function(id,valu){return IDz(id).borderRight=valu},
      IDz_bb=function(id,valu){return IDz(id).borderBottom=valu},
      IDz_bl=function(id,valu){return IDz(id).borderLeft=valu},
      IDz_w=function(id,valu){return IDz(id).style.width=valu+'px'},
      IDz_h=function(id,valu){return IDz(id).height=valu+'px'},
      IDz_pt=function(id,valu){return IDz(id).style.paddingTop=valu+'px'},
      IDz_pl=function(id,valu){return IDz(id).paddingLeft=valu+'px'},
      ltb_8='8px solid lightblue',
      blk_2='2px solid black';
      
   //}());
