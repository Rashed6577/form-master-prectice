
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
import ReuseForm from './components/ReuseForm/ReuseForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import Form from './components/Form/Form'
// import SimpleForm from './components/SimpleForm/SimpleForm'


function App() {

  const handelDataSingIn = (data) => {
    console.log('Sing in data: ', data);
  }
  const handelDataUpdate = (data) => {
    console.log('Updated Data: ', data);
  }


  return (
    <>

      <h1 className='text-7xl font-bold text-center mt-5 mb-16'>Form Master</h1>

      <GrandPa></GrandPa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <Form></Form> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseForm
        formTitle={'Sing Up'}
        submitBtn={'Sing in'}
        handelData={handelDataSingIn}
      ></ReuseForm>
      <ReuseForm
        formTitle={'Updated Profile'}
        submitBtn={'Update'}
        handelData={handelDataUpdate}
      ></ReuseForm>
    </>
  )
}

export default App
