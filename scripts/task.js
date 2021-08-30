let squares_container = document.getElementById('squares');

let list = document.createElement('ul');
let list_item = document.createElement('li');
squares_container.append(list);

for (let i=0; i<10; i++){
    let list_item = document.createElement('li');
    list.append(list_item);
}


let rus_eng_dict = {
    "делать":"make",
    "уметь":"can",
    "хотеть":"want",
    "учить":"learn",
    "знать":"know",
};
let global_count = 0;
let global_total_words = 10;
let all_li = document.querySelectorAll('#squares ul li');
let rus_array = [];
for(key in rus_eng_dict){
    rus_array.push(key);
}

function setCorrectAndNext(word=""){  
    if(global_count < global_total_words){
        all_li.item(global_count).setAttribute('class','green_square');
        document.getElementById('word').textContent = rus_array[++global_count];   
    }
    else alert('There is no more words');

}

function setFalseAndNext(word=""){
    if(global_count < global_total_words){
        document.getElementById('word').textContent = "Wrong!";
        all_li.item(global_count).setAttribute('class','red_square');
        global_count++;
    }
    else alert('There is no more words');
}

let btn_ok = document.getElementById('btn_ok');
let btn_no = document.getElementById('btn_no');

btn_ok.addEventListener('click',setCorrectAndNext);
btn_no.addEventListener('click',setFalseAndNext);


document.getElementById('word').textContent = rus_array[0];

