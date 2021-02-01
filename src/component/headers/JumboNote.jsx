import {
    Jumbotron,
    Button
} from 'react-bootstrap';

const JumboNote =()=>{
    return (
        <Jumbotron>
            <h1>Labseni Barokah</h1>
            <p>
            Menyediakan beragam kebutuhan riset, hobi, 
            sampai asupan Rohani dan jasmani.
            </p>
            <p>
                <Button variant="primary">Produk</Button>
            </p>
        </Jumbotron> 
    );
}

export default JumboNote;