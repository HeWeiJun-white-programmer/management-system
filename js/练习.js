var str = '';
for (var i = 0; i < 10; i++) {
    for (var j = i; j < 10; j++) {
        str += '*';
    }
    str += '\n';
}
console.log(str);

var arr=[];//实际开发经常用简写

var a=['adq','adda','adad']//初始化

console.log(a[1]);//访问数组元素：数组名[]

//遍历数组
for(var i=0;i<10;i++)
     {
         arr[i]=i+1;
        
     }
     console.log(arr); 
     
     //求数组的最大值 
     var arr1=[1,23,12,56,4,65,523,23356,65,6,46]; var  max=arr[0];
     for(var i=1;i<arr1.length;i++)
     { if (arr1[i]>max) {
           max=arr1[i];
           
         }
    } console.log(max);
    
    //数组转换字符串
    var arr2=['w','d','d','df','qwqw'];
    var str='';
    for(var i=0;i<arr2.length;i++){
        var b=arr2[i];//遍历数组
        str +=b+'\t';
    }
    console.log(str);
    
     //筛选数组1
     var arr3=[2,0,6,1,77,0,52,0,25,7];
     var  arr4=[];
     for(var i=0;i<arr3.length;i++)
     {
         if (arr3[i]>=10) {
             arr4[arr4.length]=arr3[i];//数组的长度可变，添加新元素
         }
     }
        console.log(arr4);


     //数组倒序函数
    function arrs(){
     var b=[1,2,1,56,45,46,3,23,232,123];
        var c=[];
        for(var i=b.length-1;i>=0;i--)
        {
                c[c.length]=b[i];
       
        }      return c;//没有return的话就返回undefined
    }
        console.log(arrs());
