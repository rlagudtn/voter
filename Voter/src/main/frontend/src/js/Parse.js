export function parseTime(time){
    let ret=time.substring(0,10);
    return ret;
}

export function setDuration(duration){
    let today=new Date();

    
    
    let dateAgo=new Date(today.setMonth(today.getMonth()-duration));

    let year =today.getFullYear();
    let month=('0'+(today.getMonth()+1)).slice(-2);
    let day=('0'+today.getDate()).slice(-2);

    let dateString=year+'-'+month+'-'+day;
    return dateString;
}

export function getCurrent(){
    let today=new Date();
    let year =today.getFullYear();
    let month=('0'+(today.getMonth()+1)).slice(-2);
    let day=('0'+today.getDate()).slice(-2);

    let dateString=year+'-'+month+'-'+day;
    return dateString;

}

