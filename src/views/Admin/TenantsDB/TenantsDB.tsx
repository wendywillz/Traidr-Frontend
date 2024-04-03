//STYLE IMPORTS
import { AdminPageContainer, AdminPageTitle, AdminPageMain, AdminPageContent, } from "../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled"
import { TenantsDBContainer } from "./TenantsDB.styled"


//COMPONENT IMPORTS
import AdminHeader from "../../../components/Header/Header"
import AdminSideBar from "../../../components/adminSideBar/AdminSideBar"


//PACKAGE IMPORTS
import { ChangeEvent, useState } from "react"


//INTERFACE DECLARATIONS
interface TenantsDataBase{
    userID: string;
    username: string;
    age: string;
    gender: string;
    dateCreated: string;
    shopName: string;
    [key: string]: string; // Add index signature
}
function TenantsDataBase() {
const [TenantsDataBase, setTenantsDataBase] = useState([
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
        { userID: '', username: '', age: '', gender: '', dateCreated: '', shopName: '' },
    ]);



    const handleInputChange = (_e: ChangeEvent<HTMLInputElement>, _rowIndex: number, _key: string) => {
        const updatedData = [...TenantsDataBase];
        interface TenantsDataBase {
            userID: string;
            username: string;
            age: string;
            gender: string;
            dateCreated: string;
            shopName: string;
            [key: string]: string; // Add index signature
        }

        // Rest of the code...

        setTenantsDataBase(updatedData);
    }

    return (
        <AdminPageContainer>
                <AdminSideBar/>
                <AdminPageMain>
                        <AdminHeader/>
                        <AdminPageTitle>Tenants Database</AdminPageTitle>
                        
                        <AdminPageContent>
                         <TenantsDBContainer>   
                        <table>
            <thead>
                <tr>
                    <th>userID</th>
                    <th>username</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>date created</th>
                    <th>shop name</th>
                </tr>
            </thead>
            <tbody>
                {TenantsDataBase.map((row, index) => (
                    <tr key={index}>
                        <td><input type="text" value={row.userID} onChange={(e) => handleInputChange(e, index, 'userID')} /></td>
                        <td><input type="text" value={row.username} onChange={(e) => handleInputChange(e, index, 'username')} /></td>
                        <td><input type="text" value={row.age} onChange={(e) => handleInputChange(e, index, 'age')} /></td>
                        <td><input type="text" value={row.gender} onChange={(e) => handleInputChange(e, index, 'gender')} /></td>
                        <td><input type="text" value={row.dateCreated} onChange={(e) => handleInputChange(e, index, 'dateCreated')} /></td>
                        <td><input type="text" value={row.shopName} onChange={(e) => handleInputChange(e, index, 'shopName')} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </TenantsDBContainer> 


        </AdminPageContent>
                </AdminPageMain>
        </AdminPageContainer>
    )

                }

export default TenantsDataBase