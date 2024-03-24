The Admin dashboard folder is intended for the 6 Admin pages required for this sprint. The "AdminPagesComponents" folder contains all the main components and styles that would be used across all the pages (or in multiple pages). This includes the "AdminHeader", The "AdminSidebar" the "RecentActivity" and the "MainAdminStyles".

The MOST IMPORTANT folder is the "MainAdminStyles" which contains one styled file called "MainAdminStyles.Styled.tsx". This file contains the styles that will render the desired format of the page. DO NOT TOUCH THE STYLING!!! (unless you're one of the two devs allowed to do so. If you notice a problem, direct it to them). Also IGNORE THE BORDERS (for now.) Just use them as a guide.

Now, to render you page, your code should have this EXACT format:

const Page = () => {
  return (
    <AdminPageContainer>
        <AdminSideBar/>
        <AdminPageMain>
            <AdminHeader/>
            <AdminPageTitle>Page Title</AdminPageTitle>
            <AdminPageContent>
                <BarChart/>
                <PieChart />
            </AdminPageContent>
        </AdminPageMain>
    </AdminPageContainer>
  )
}
export default page


ALL YOU HAVE TO DO IS TO WRAP YOUR CREATED CHARTS / TABLES INTO THE ADMIN PAGE CONTENT DIV. JUST LIKE THE CODE BELOW:

<AdminPageContent>
    <BarChart/>
    <PieChart />
</AdminPageContent>

THEN PLACE YOUR CONTENT IN THE APPROPRIATE FOLDER FOR YOUR PAGE.

The "TestPage.tsx" file found in the "TestContent" folder shows you what would be rendered using this model.
Thank you for your understanding.