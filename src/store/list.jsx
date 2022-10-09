import { useSelector } from 'react-redux';
import { selectData, getDataError, getDataStatus } from './slice';

const PhoneList = () => {
    const data = useSelector(selectData);
    const error = useSelector(getDataError)
    const status = useSelector(getDataStatus)
    console.log(data, error, status, "dari elector")

    if (status === 'success'){
        const phones = data.products.map((phone) => (
            <li key={phone.id}>
                <img src={phone.thumbnail} alt="" />
                {/* <textarea name={phone.name} id="phone" cols="30" rows="10" >{phone.name}</textarea> */}
                <p>{phone.title}</p>
                <p>{phone.description}</p>
                <p>{phone.price}</p>
            </li>
        ));
        return <div>{phones}</div>;

    }
};

export default PhoneList;