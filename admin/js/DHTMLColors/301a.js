//*******************************************************************************
//Title:      FCP Combo-Chromatic Color Picker
//URL:        http://www.free-color-picker.com
//Product No. FCP201a
//Version:    1.2
//Date:       10/01/2006
//NOTE:       Permission given to use this script in ANY kind of applications IF
//            script code remains UNCHANGED and the anchor tag "powered by FCP"
//            remains valid and visible to the user.
//
//  Call:     showColorGrid3("input_field_id","span_id")
//  Add:      <DIV ID="COLORPICKER301" CLASS="COLORPICKER301"></DIV> anywhere in body
//*******************************************************************************
function getScrollY() {
	
	var scrOfX = 0,scrOfY=0;
	
	if( typeof(window.pageYOffset)=='number' ) {
		
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
		
	} else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){
		
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
		
	}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){
		
		scrOfY = document.documentElement.scrollTop;
		scrOfX = document.documentElement.scrollLeft;
	}
		
	return scrOfY;
}
	
document.write("<style>.colorpicker301{text-align:center;visibility:hidden;display:none;position:absolute;background-color:#FFF;border:solid 1px #CCC;padding:4px;z-index:999;filter:progid:DXImageTransform.Microsoft.Shadow(color=#D0D0D0,direction=135);}.o5582brd{border-bott6om:solid 1px #DFDFDF;border-right:solid 1px #DFDFDF;padding:0;width:12px;height:14px;}a.o5582n66,.o5582n66,.o5582n66a{font-family:arial,tahoma,sans-serif;text-decoration:underline;font-size:9px;color:#666;border:none;}.o5582n66,.o5582n66a{text-align:center;text-decoration:none;}a:hover.o5582n66{text-decoration:none;color:#FFA500;cursor:pointer;}.a01p3{padding:1px 4px 1px 2px;background:whitesmoke;border:solid 1px #DFDFDF;}</style>");

function gett6op6(){
	
	csBrHt = 0;
	if(typeof(window.innerWidth)=='number'){
		
		csBrHt = window.innerHeight;
		
	}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){
		
		csBrHt = document.documentElement.clientHeight;
		
	}else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){
		
		csBrHt=document.body.clientHeight;
		
	}
	
	ctop = ((csBrHt/2)-132)+getScrollY();
	
	return ctop;
}

function getLeft6(){
	
	var csBrWt=0;
	
	if(typeof(window.innerWidth)=='number'){
		
		csBrWt = window.innerWidth;
		
	}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){
		
		csBrWt = document.documentElement.clientWidth;
		
	}else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){
		
		csBrWt=document.body.clientWidth;
	}
	
	cleft = (csBrWt/2)-125;
	
	return cleft;
}

var nocol1="&#78;&#79;&#32;&#67;&#79;&#76;&#79;&#82;";
var clos1="&#67;&#76;&#79;&#83;&#69;";
var tt6="&#70;&#82;&#69;&#69;&#45;&#67;&#79;&#76;&#79;&#82;&#45;&#80;&#73;&#67;&#75;&#69;&#82;&#46;&#67;&#79;&#77;";
var hm6="&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#119;&#119;&#119;&#46;";

hm6+=tt6;
tt6="&#80;&#79;&#87;&#69;&#82;&#69;&#68;&#32;&#98;&#121;&#32;&#70;&#67;&#80;";

function setCCbldID6(objID,val){
	
	document.getElementById(objID).value=val;
	
}

function setCCbldSty6(objID,prop,val){
	
	switch(prop){
		
		case "bc":if(objID!='none'){
			document.getElementById(objID).style.backgroundColor=val;
		}
		break;
		
		case "vs":document.getElementById(objID).style.visibility=val;
		break;
		
		case "ds":document.getElementById(objID).style.display=val;
		break;
		
		case "tp":document.getElementById(objID).style.top=val;
		break;
		
		case "lf":document.getElementById(objID).style.left=val;
		break;
	}
}

function putOBJxColor6(OBjElem,Samp,pigMent){
	
	if(pigMent!='x'){
		
		setCCbldID6(OBjElem,pigMent);
		setCCbldSty6(Samp,'bc',pigMent);
	}
	
	setCCbldSty6('colorpicker301','vs','hidden');
	setCCbldSty6('colorpicker301','ds','none');
	
	document.getElementById(OBjElem).onchange();
}

function showColorGrid3(OBjElem,Sam){
	
	var objX=new Array('00','33','66','99','CC','FF');
	var c=0;
	var z='"'+OBjElem+'","'+Sam+'",""';
	var xl='"'+OBjElem+'","'+Sam+'","x"';
	var mid='';
	
	mid+='<center><table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="border:solid 1px #F0F0F0;padding:2px;"><tr>';
	mid+="<td colspan='18' align='left' style='font-size:10px;background:#6666CC;color:#FFF;font-family:arial;'>&nbsp;Combo-Chromatic Selection Palette</td></tr><tr><td colspan='18' align='center' style='margin:0;padding:2px;height:14px;' ><input class='o5582n66' type='text' size='10' id='o5582n66' value='#FFFFFF'><input class='o5582n66a' type='text' size='2' style='width:14px;' id='o5582n66a' onclick='javascript:alert(\"click on selected swatch below...\");' value='' style='border:solid 1px #666;'>&nbsp;|&nbsp;<a class='o5582n66' href='javascript:onclick=putOBJxColor6("+z+")'><span class='a01p3'>"+nocol1+"</span></a>&nbsp;&nbsp;&nbsp;&nbsp;<a class='o5582n66' href='javascript:onclick=putOBJxColor6("+xl+")'><span class='a01p3'>"+clos1+"</span></a></td></tr><tr>";
	
	var br=1;
	
	for(o=0;o<6;o++){
		
		mid+='</tr><tr>';
		
		for(y=0;y<6;y++){
			
			if(y==3){mid+='</tr><tr>';}
			
			for(x=0;x<6;x++){
				
				var grid='';
				grid=objX[o]+objX[y]+objX[x];
				var b="'"+OBjElem+"', '"+Sam+"','#"+grid+"'";
				mid+='<td class="o5582brd" style="background-color:#'+grid+'"><a class="o5582n66"  href="javascript:onclick=putOBJxColor6('+b+');" onmouseover=javascript:document.getElementById("o5582n66").value="#'+grid+'";javascript:document.getElementById("o5582n66a").style.backgroundColor="#'+grid+'";  title="#'+grid+'"><div style="width:12px;height:14px;"></div></a></td>';
				c++;
			}
		}
	}
	
	mid+='</tr></table>';
	var objX=new Array('0','3','6','9','C','F');
	var c=0;
	var z='"'+OBjElem+'","'+Sam+'",""';
	var xl='"'+OBjElem+'","'+Sam+'","x"';
	mid+='<table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="border:solid 1px #F0F0F0;padding:1px;"><tr>';
	var br=0;
	
	for(y=0;y<6;y++){
		
		for(x=0;x<6;x++){
			
			if(br==18){br=0;mid+='</tr><tr>';}
			
			br++;
			var grid='';
			grid=objX[y]+objX[x]+objX[y]+objX[x]+objX[y]+objX[x];
			var b="'"+OBjElem+"', '"+Sam+"','#"+grid+"'";
			mid+='<td class="o5582brd" style="background-color:#'+grid+'"><a class="o5582n66"  href="javascript:onclick=putOBJxColor6('+b+');" onmouseover=javascript:document.getElementById("o5582n66").value="#'+grid+'";javascript:document.getElementById("o5582n66a").style.backgroundColor="#'+grid+'";  title="#'+grid+'"><div style="width:12px;height:14px;"></div></a></td>';
			
			c++;
		}
	}
	
	mid+="</tr><tr><td colspan='18' align='right' style='padding:2px;border:solid 1px #FFF;background:#FFF;'><a href='"+hm6+"' style='color:#666;font-size:8px;font-family:arial;text-decoration:none;letter-spacing:1px;'>"+tt6+"</a></td>";
	mid+='</tr></table></center>';
	
	setCCbldSty6('colorpicker301','tp','100px');
	
	document.getElementById('colorpicker301').style.top  = gett6op6()+'px';
	document.getElementById('colorpicker301').style.left = getLeft6()+'px';
	
	setCCbldSty6('colorpicker301','vs','visible');
	setCCbldSty6('colorpicker301','ds','block');
	
	document.getElementById('colorpicker301').innerHTML=mid;
}
