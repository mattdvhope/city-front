import React from "react";
import Link from 'gatsby-link';
import axios from 'axios'
import styled from "styled-components";
import styles from "../css/trainingSessions.module.css";

const TrainingContainer = styled.div`
  color: #555;
  background-color: #EFEFEF;
  margin-top: 35px;
  margin-bottom: 40px;

  padding-bottom: 25px;
`

const TitleText = styled.p`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";

  @media (min-width: 1180px) {
    font-size: 450%;
  }
  @media (max-width: 1180px) {
    font-size: 440%;
  }
  @media (max-width: 1100px) {
    font-size: 430%;
  }
  @media (max-width: 990px) {
    font-size: 420%;
  }
  @media (max-width: 767px) {
    font-size: 380%;
  }
  @media (max-width: 600px) {
    font-size: 350%;
  }
  @media (max-width: 480px) {
    font-size: 290%;
  }
  @media (max-width: 430px) {
    font-size: 230%;
  }
  @media (max-width: 375px) {
    font-size: 200%;
  }
  @media (max-width: 330px) {
    font-size: 180%;
  }
`

const DescriptionText = styled.p`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";

  @media (min-width: 1180px) {
    font-size: 250%;
  }
  @media (max-width: 1180px) {
    font-size: 240%;
  }
  @media (max-width: 1100px) {
    font-size: 230%;
  }
  @media (max-width: 990px) {
    font-size: 220%;
  }
  @media (max-width: 767px) {
    font-size: 180%;
  }
  @media (max-width: 600px) {
    font-size: 150%;
  }
  @media (max-width: 480px) {
    font-size: 100%;
  }
  @media (max-width: 430px) {
    font-size: 90%;
  }
  @media (max-width: 375px) {
    font-size: 88%;
  }
  @media (max-width: 330px) {
    font-size: 85%;
  }
`

const SubtitleText = styled.p`
  margin-top: -1em;
  margin-bottom: -0.3em;
  @media (min-width: 1180px) {
    font-size: 170%;
  }
  @media (max-width: 1180px) {
    font-size: 160%;
  }
  @media (max-width: 1100px) {
    font-size: 150%;
  }
  @media (max-width: 990px) {
    font-size: 140%;
  }
  @media (max-width: 767px) {
    font-size: 100%;
  }
`

const SubtitleTextTwo = styled.p`
  margin-bottom: -0.3em;
  @media (min-width: 1180px) {
    font-size: 170%;
  }
  @media (max-width: 1180px) {
    font-size: 160%;
  }
  @media (max-width: 1100px) {
    font-size: 150%;
  }
  @media (max-width: 990px) {
    font-size: 140%;
  }
  @media (max-width: 767px) {
    font-size: 100%;
  }
`

const NoBulletsInList = styled.ul`
  list-style: none;
  margin-left: -50px;
`

const SpacedListItem = styled.li`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  list-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #8BC34A;

  @media (min-width: 1200px) {
    font-size: 330%;
    margin-left: 1%;
  }
  @media (max-width: 1200px) {
    font-size: 300%;
    margin-left: 1%;
  }
  @media (max-width: 1180px) {
    font-size: 290%;
  }
  @media (max-width: 1100px) {
    font-size: 220%;
  }
  @media (max-width: 990px) {
    font-size: 200%;
  }
  @media (max-width: 767px) {
    font-size: 160%;
  }
  @media (max-width: 600px) {
    font-size: 150%;
  }
  @media (max-width: 510px) {
    font-size: 135%;
  }
  @media (max-width: 480px) {
    font-size: 120%;
    margin-left: 2%;
  }
  @media (max-width: 430px) {
    font-size: 100%;
    margin-left: 3%;
  }
  @media (max-width: 375px) {
    font-size: 90%;
  }
  @media (max-width: 340px) {
    font-size: 110%;
  }
`

export default class Top extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      class_times: [],
      window: undefined
    };
  }

  componentDidMount() {
    axios.get(`${process.env.GATSBY_API_URL}/class_times.json`)
      .then((response) => {
        const class_times = this.filterSortClassTimes(response.data);
        this.setState({ class_times, window: window });
      });

    try {
      const mdbreact = require("mdbreact");
      this.setState({ mdbreact: mdbreact });
    } catch (e) {
      console.error(e);
    }
  }

  filterSortClassTimes(class_times) {
    var class_times_part = [];
    class_times.forEach(function(class_time) {
      if ((class_time.part === "one" || "two") && class_time.completed === false) {
        class_times_part.push(class_time)
      }
    });

    return class_times_part.sort(function(a, b) {
      return a.order_no - b.order_no;
    });
  }

  render() {
    let textItems = [];
    let period;
    if (this.state.window) {
    console.log(this.state.class_times)
      const language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['พัฒนาภาษาอังกฤษของคุณ',
                     'เราเข้าใจว่าคนไทยต้องการพัฒนาภาษาอังกฤษและพัฒนาทักษะความสามารถในการสื่อสารกับคนตะวันตก หลักสูตร 4 หรือ 5 วัน ของโครงการซิตี้ อิงลิช ที่คนไทยสามารถกลายเป็นคนที่มีความมั่นใจในการพูดและการฟังภาษาอังกฤษของพวกเขา โดยผ่านทางการฝึกสนทนา, กิจกรรมที่สนุกสนาน และการเรียนรู้จากเกมส์',
                     'คลิกด้านล่างเพื่อเลือกหลักสูตร 5 วัน',
                     '(หลักสูตร 5 วัน ราคา 699 บาท -- ราคาโปรโมชั่นพิเศษ - 599 บาท)',
                     'สมัครเรียน',
                     'ประกาศ!! สำหรับชั้นเรียนในสัปดาห์หน้าและต่อๆ ไป',
                     'เนื่องจากรัฐบาลไทยได้ขอความร่วมมือให้ผู้คนหยุดพบปะกันหรือรวมตัวกันเป็นกลุ่ม โครงการซิตี้ อิงลิช เราจึงได้ตัดสินใจในการเริ่มสอนภาษาอังกฤษออนไลน์ทันทีครับ',
                     'ถ้าคุณได้ลงทะเบียนเรียนภาษาอังกฤษกับเราแล้ว กรุณาดาวน์โหลดแอป',
                     'เพื่อให้คุณสามารถเข้าร่วมชั้นเรียนภาษาอังกฤษออนไลน์ของเราได้ครับ',
                     'CEP จะสอนตอนเย็นวันอังคารและวันพฤหัสบดีครับ',
                     '1.ในวันอังคาร City Talk 1 (5 สัปดาห์)',
                     '2.วันพฤหัสบดี City Life Book 4 (5 สัปดาห์)',
                     ];
                {/* 'เราหวังว่า คุณจะสามารถมาเข้าร่วมเรียนภาษาอังกฤษด้วยกันกับเรา', */}
                {/* 'กรุณาคลิกเข้าไปตรงกล่องสีเขียว  เพื่อลงทะเบียนเรียนกับทางเรา' */}
                {/*  'ศูนย์ City English Project จะปิดทำการเรียนการสอนในระหว่างวันที่ 1-30 ธันวาคม 2019 โดยจะเปิดชั้นเรียนรอบถัดในเดือนหน้า',  */}
                {/*  'แต่ทางศูนย์จะเปิดให้นักเรียนและผู้ที่สนใจสามารถเข้ามางานเลี้ยงคริสต์มาสได้ ในคืนวันวันพฤหัสนี้ (11 ธันวาคม, 19:00-21:00น) ค่ะ เรายินดีต้อนรับทุกคนค่ะ'  */}
      } else {
        textItems = ['Improve Your English',
                     'We understand Thai people want to improve their English and develop their abilities to communicate with Western people. City English Project offers a 4 or 5 day training in which Thai people can become more confident in their English speaking and listening through practicing conversation, fun activities and learning games.',
                     'click below to choose a 5-day seminar',
                     '(a 5-day seminar costs 699 baht -- Special promotion price - 599 baht)',
                     'Register',
                     'Announcement!  ...for the classes in the upcoming weeks',
                     'Since the Thai government wants people to no longer meet in groups, CEP has decided to start teaching English online immediately.',
                     'If you have registered in English with us then please download the',
                     'app so you can join our online English classes',
                     'CEP will teach Tuesday and Thursday evenings.',
                     '1. On Tuesday, City Talk 1 (5 weeks).',
                     '2. Thursday, City Life Book 4 (5 weeks).',
                     ];
                {/* 'We hope you can join us for our English classes!',  */}
                {/* 'Please click on one of the green boxes below to register for a class!'  */}     
                {/*  'The City English Project will close the term from 1 to 31 December for classes. Our next City Talk classes will start again after that.', */}
                {/*  'However, even though we will not have classes, we will have a Christmas party at our center this Wednesday (11 December, 19:00-21:00) for conversation and games. We would love for all of you to join us!' */}
      }

      const { MDBBtn } = this.state.mdbreact;

      return (
        <TrainingContainer className="container-fluid">
          <TitleText className="text-center">{textItems[0]}</TitleText>
          <DescriptionText className="text-center">{textItems[1]}</DescriptionText>

          {(this.state.class_times.length !== 0) ? 
            <div>
              <SubtitleText className="text-center">{textItems[2]}</SubtitleText>
              <SpacedListItem className="text-center">
                <div style={{fontSize: `120%`, marginBottom: `1%`, fontWeight: `bold`}}>{textItems[5]}</div>
                <img className={styles.avatar} src="https://cep-pictures.s3-ap-southeast-1.amazonaws.com/Corona+Virus+CEP.png" alt=""/>
                <div style={{fontSize: `110%`, marginBottom: `2%`}}>{textItems[6]}</div>
                <div style={{fontSize: `110%`, marginBottom: `2%`}}>{textItems[7]}<a href="https://zoom.us/" target="_blank" >&nbsp;Zoom&nbsp;</a>{textItems[8]}</div>
                <div style={{fontSize: `110%`, marginBottom: `2%`}}>{textItems[9]}</div>
                <div style={{fontSize: `110%`, marginBottom: `2%`}}>{textItems[10]}</div>
                <div style={{fontSize: `110%`, marginBottom: `2%`}}>{textItems[11]}</div>
              </SpacedListItem>
          {/* <SubtitleTextTwo className="text-center">{textItems[3]}</SubtitleTextTwo> */}
              <div className="row">
                <div className="col">
                    <NoBulletsInList>
                      {
                        this.state.class_times.map((e, key) => {
                          language === "thai" ? period = e.period_thai : period = e.period;
                          return  <SpacedListItem className="text-center" key={e.period} value={e.id} >
                                    <Link style={{color: `#2D3179`, fontSize: `130%`}} to={`/app/register/${e.id}`}>
                                      <p style={{fontSize: `120%`}}>{e.category}</p>
                                      {period}
                                      <br/>
                                      <MDBBtn color="indigo" style={{fontSize: `115%`}}>{textItems[4]}</MDBBtn>
                                    </Link>
                                  </SpacedListItem>;
                        })
                      }
                    </NoBulletsInList>
                </div>
              </div>
            </div>
          :
            <div className="row">
              <div className="col">
                <NoBulletsInList>
                  <SpacedListItem className="text-center">
                    <div style={{fontSize: `120%`, marginBottom: `1%`, fontWeight: `bold`}}>{textItems[5]}</div>
                    <div style={{fontSize: `110%`, marginBottom: `2%`}}>{textItems[6]}</div>
                    <img className={styles.avatar} src="https://cep-pictures.s3-ap-southeast-1.amazonaws.com/Corona+Virus+CEP.png" alt=""/>
                    <div style={{fontSize: `110%`, marginBottom: `2%`}}>{textItems[7]}</div>
                  </SpacedListItem>
                </NoBulletsInList>
              </div>
            </div>

          }

        </TrainingContainer>
      );
    } else {
      return <span />
    }
  }
}