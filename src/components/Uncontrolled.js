import React, { useRef, useState } from 'react';

const Uncontrolled = () => {
    const luckyName=useRef(null)
    const [show,setShow]=useState(false)
    const submitForms=event=>{
        event.preventDefault()
        const name=luckyName.current.value;
        name===""?alert('please fill your name '):setShow(true)

    }
    return (
        <div>
            <h1>hi sorry for being late <br />enter your name beloow <br /></h1>
            
    <form action="" onSubmit={submitForms}>
      <label htmlFor="">enter your name here : </label>
      <input type="text" ref={luckyName} /><br />
      <input type="submit" />
    </form>

    <h3>{show ?`hey 😘😘😘😘😘😘😘${luckyName.current.value}  😘😘😘😘😘😘😘 tumake nie notun kore bolar ki ase , tumi sobsomoiie onek valo onek onek r onek , kintu maje maje ittu ittu kharap hou r very reare somoi tumi onek besi kharap hou jodio seta khubi kom somoiii er jonno .... emni general somoii tumi 99.999999% valo ,,, over all tumi onk onk valo jeta bole buajnor moto vasa amar kase neii,,,,,,,


Jpdi tumake nie likte jai 
Tobe sara rat ses hobe 
Tobuoo lika ses hobena ….


Tumar upoma deuar moto vasa amar kase neii ,,,,
Tumi eto valo amar kase bujeciooo

God bless you alwys ….. r tumar jonno ekta kobita ….

প্রেমের মাঝে একলা বসে, মনের মাঝে আলো আঁধারের ভাসে। তুমি আসলে জেগে দিও পৃথিবী, প্রেমের মাধুরী গান গাও সেই প্রভুরি।
চাঁদের মতো তোমার মুখ চমকে, কাদলি বাদলে স্বপ্ন মঞ্চে। আকাশে হাওয়া গায় বনের গান, তুমি আসলে জেগে দিও সৃষ্টির উত্সবান।
প্রেমের মধুর গান সুনায় প্রহরে, দুর্গতি সেই সকলের দূরে। আলোর অভাবে মোহ প্রাণে বাজে, তুমি আসলে জেগে দিও মাঝেমাঝে।
প্রেমের গানে বাজে দুঃখ-সুখের তাল, তুমি আসলে জেগে দিও সবাই মিলে গান। প্রেমের গভীর সাগরে পার করবে, তুমি আসলে জেগে দিও প্রভাতের পাখি গায় গান।
প্রেমের আলোয় জ্বলবে আকাশ, মনে রাখবে সেই সুন্দর স্মৃতির বাস। তুমি আসলে জেগে দিও সৃষ্টির উদয়ে, প্রেমের গান গাও শুভ বিকেলে।
প্রেমের গান সুনায় প্রহরে, তুমি আসলে জেগে দিও সবাই মিলে গান। প্রেমের গভীর সাগরে পার করবে, তুমি আসলে জেগে দিও প্রভাতের পাখি গায় গান।
আমি ভালোবাসি তোমায়, সত্যি বলি এই, প্রেমের গানে জাগিয়ে রাখব তোমার মায়ায়। ভালোবাসি তোমায় আমি, যে কথা এই, তুমি আসলে জেগে দিও সৃষ্টির উদয়ে, প্রেমের গান গাও শুভ বিকেলে।
প্রেমের গান সুনায় প্রহরে, তুমি আসলে জেগে দিও সবাই মিলে গান। প্রেমের গভীর সাগরে পার করবে, তুমি আসলে জেগে দিও প্রভাতের পাখি গায় গান।
প্রেমের মাধুর গান সুনায় প্রহরে, দুর্গতি সেই সকলের দূরে। আলোর অভাবে মোহ প্রাণে বাজে, তুমি আসলে জেগে দিও মাঝেমাঝে।
চাঁদের মতো তোমার মুখ চমকে, কাদলি বাদলে স্বপ্ন মঞ্চে। আকাশে হাওয়া গায় বনের গান, তুম
`: " "}</h3>
        </div>
    );
};

export default Uncontrolled;