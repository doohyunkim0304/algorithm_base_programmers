// 출처 https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
    
    var queue = [];
    var sorted_queue = [];
    var tmp_queue = [];
    var answer = 0;
    
    for(var i=0;i<priorities.length;i++){
        queue[i] = [];
        queue[i][0] = priorities[i];        //value
        queue[i][1] = i;        //index
    }
    var unsorted_num = 0;

    for(var i=9;i>0;i--){
        for(var j=unsorted_num;j<queue.length;j++){
            if(queue[j][0] == i){   //if it match
                var minus = 0;
                for(var k=unsorted_num;k<j;k++){
                    queue.push(queue[unsorted_num]);
                    queue.splice(unsorted_num,1);
                    minus++;
                }
                 j-=  minus;
                unsorted_num++;                
            }            
        }
    }   

    for(var i=0;i<queue.length;i++){
        if(queue[i][1] == location){
            return i+1;
        }
    }
    return answer;
}
