export default function Nav({user}) {
    const {firstname, lastname} = user;
    return (
        <div>
           
            <p> {firstname}</p>
           <p>{lastname} </p>
            <p>I am nav</p>
            
        </div>
    );
}