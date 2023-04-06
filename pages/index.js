import Head from 'next/head'
import MainScreen from '@/components/mainScreen/MainScreen'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CoursesComponent from "@/components/courses/CoursesComponent";
import ProsComponent from "@/components/prosComponent/ProsComponent";
import Feedback from "@/components/feedback/Feedback";
import FormComponent from "@/components/formComponent/FormComponent";
import QuestionsContainer from "@/components/questionsContainer/QuestionsContainer";
export default function Home() {
  return (
    <>
        <Navbar />
        <MainScreen />
        <CoursesComponent />
        <ProsComponent />
        <FormComponent/>
        <Feedback />
        <QuestionsContainer />
        <Footer />
    </>
  )
}
