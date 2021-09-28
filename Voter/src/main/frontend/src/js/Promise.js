import '../css/Promise.css';
function Promise(){
    return(
        <div>
            <PromiseItem></PromiseItem>
            <PromiseItem></PromiseItem>
            <PromiseItem></PromiseItem>
            <PromiseItem></PromiseItem>
            <PromiseItem></PromiseItem>
        </div>
    );
}
function PromiseItem(){
    return (
        <div className="promiseItem">
            <p className="content">청년일자리 ~~~~~~</p>
            <p className="possiblity"> 실현 가능성 : 70% </p>
        </div>
    );

}

export default Promise;