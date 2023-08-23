import './App.css'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import Header from './components/Header'
import LinearScale from './components/LinearScale'
import MultiTable from './components/MultiTable'
import QuestionCard from './components/QuestionCard'
import TextCard from './components/TextCard'
import Upload from './components/Upload'

const App = () => {
  return (
    <div className="App">
      <form className='App'>
        <Header />
        <QuestionCard
          type="radio"
          title="MCQ"
        />
        <QuestionCard
          type="checkbox"
          title="Checkbox"
        />
        <TextCard
          type="text"
          title="Short Answer"
          placeholder="Your answer"
          width="45"
        />
        <TextCard
          type="text"
          title="ParaGraph"
          placeholder="Your answer"
          width="90"
        />
        <Dropdown
          title="DropDown"
        />
        <Upload
          title="File Upload"
        />
        <LinearScale
          title="Linear Scale"
        />
        <MultiTable
          title="Multi Choice Grid"
          type="radio"
        />
        <MultiTable
          title="Tick Box Grid"
          type="checkbox"
        />
        <Footer />
      </form>
    </div>
  )
}

export default App
