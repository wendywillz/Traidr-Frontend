/* eslint-disable @typescript-eslint/no-unused-vars */
//STYLE IMPORTS
import {
  AdminPageContainer,
  AdminPageTitle,
  AdminPageMain,
  AdminPageContent,
} from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled";
import { TenantsDBContainer, TenantsDBTable, TenantsDBHeaderRow, TenantsDBDataRow, TenantsDBHeaderCell, TenantsDBDataCell  } from "./TenantsDB.styled";

//COMPONENT IMPORTS
import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader";
import AdminSideBar from "../../../../components/adminSideBar/AdminSideBar";

//PACKAGE IMPORTS
import { useEffect, useState } from "react";
import { fetchTenantDatabase } from "../../../../api/admin";

interface TenantsDataBase {
  userId: string;
  name: string;
  gender:string;
  age: number;
  shopName:string;
  shopCreatedAt:string;
}

//INTERFACE DECLARATIONS

function TenantsDataBase() {
  const [tenantsDataBase, setTenantsDataBase] = useState<TenantsDataBase[]>();

  // const handleInputChange = (
  //   _e: ChangeEvent<HTMLInputElement>,
  //   _rowIndex: number,
  //   _key: string
  // ) => {
  //   const updatedData = [...TenantsDataBase];

  //   // Rest of the code...

  //   setTenantsDataBase(updatedData);
  // };


useEffect(()=>{
  fetchTenantDatabase().then((res:TenantsDataBase[])=>{
    if(res){
      setTenantsDataBase(res)
    }
  })
  
},[])


  return (
    <AdminPageContainer>
      <AdminHeader />
      <AdminSideBar />
      <AdminPageMain>
        <AdminPageContent>
          <AdminPageTitle>Tenants Database</AdminPageTitle>
          <TenantsDBContainer>
            <TenantsDBTable>
              <thead>
                <TenantsDBHeaderRow>
                  <TenantsDBHeaderCell id="header-row-id">User ID</TenantsDBHeaderCell>
                  <TenantsDBHeaderCell>User Name</TenantsDBHeaderCell>
                  <TenantsDBHeaderCell>Age</TenantsDBHeaderCell>
                  <TenantsDBHeaderCell>Gender</TenantsDBHeaderCell>
                  <TenantsDBHeaderCell>Shop Name</TenantsDBHeaderCell>
                  <TenantsDBHeaderCell>Date Created</TenantsDBHeaderCell>
                  
                </TenantsDBHeaderRow>
              </thead>
              <tbody>
                
                  {tenantsDataBase?.map((tenant)=>{
                    return(
                      <TenantsDBDataRow>

                      <TenantsDBDataCell>{tenant.userId.substring(0, 29)}...</TenantsDBDataCell>
                      <TenantsDBDataCell>{tenant.name}</TenantsDBDataCell>
                      <TenantsDBDataCell>{tenant.age}</TenantsDBDataCell>
                      <TenantsDBDataCell>{tenant.gender}</TenantsDBDataCell>
                      <TenantsDBDataCell>{tenant.shopName}</TenantsDBDataCell>
                      <TenantsDBDataCell>{tenant.shopCreatedAt}</TenantsDBDataCell>

                      </TenantsDBDataRow>
                    )
                  })}
              </tbody>
            </TenantsDBTable>
          </TenantsDBContainer>
        </AdminPageContent>
      </AdminPageMain>
    </AdminPageContainer>
  );
}

export default TenantsDataBase;
