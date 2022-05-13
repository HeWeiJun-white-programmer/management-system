window.addEventListener('load', function() {
    document.body.onselectstart = function() {
        return false;
    }
})
//下拉菜单后期改
window.addEventListener('load',function() {
     var list = document.querySelectorAll('#lid');
     for(let i = 0; i < list.length; i++) { 
         list[i].addEventListener('click',function(){
        if(this.children[1].style.display=='none'||this.children[1].style.display=='') 
               {this.children[1].style.display='block';
               this.children[1].style.bgcolor= 'rgba(255, 255, 255, 0.3)';
               console.log(this.children[1].style.display);
            }
/*    else {  
                    this.children[1].style.display='none'; console.log(this.children[1].style.display);} */
         })
     }

})
//tab栏
window.addEventListener('load',function getTab() {
    var  tab_lis=document.querySelectorAll('.lis');
var item=document.querySelectorAll('.item');
for(let i=0;i<tab_lis.length;i++) {
    tab_lis[i].setAttribute('index',i);
    tab_lis[i].addEventListener("click",function(){
        for(let j=0;j<tab_lis.length;j++) {tab_lis[j].style.backgroundColor=''}
            this.style.backgroundColor= ' rgba(255, 255, 255, 0.3)';
            var index=this.getAttribute('index');
           for(let i=0;i<item.length;i++)
           {item[i].style.display='none';}
           item[index].style.display='block';      

    })
}})