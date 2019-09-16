import React from "react";
import Link from 'gatsby-link';
import axios from 'axios'
import styled from "styled-components";

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
                     'เราเข้าใจว่าคนไทยต้องการพัฒนาภาษาอังกฤษและพัฒนาทักษะความสามารถในการสื่อสารกับคนตะวันตก หลักสูตร 5 วัน ของโครงการซิตี้ อิงลิช ที่คนไทยสามารถกลายเป็นคนที่มีความมั่นใจในการพูดและการฟังภาษาอังกฤษของพวกเขา โดยผ่านทางการฝึกสนทนา, กิจกรรมที่สนุกสนาน และการเรียนรู้จากเกมส์',
                     'คลิกด้านล่างเพื่อเลือกหลักสูตร 5 วัน',
                     '(หลักสูตร 5 วัน ราคา 699 บาท -- ราคาโปรโมชั่นพิเศษ - 599 บาท)',
                     'สมัครเรียน',
                     'ประกาศ',
                     'ศูนย์ City English Project จะปิดทำการเรียนการสอนในระหว่างวันที่ 16-27 กันยายน 2019 โดยจะเปิดชั้นเรียนรอบถัดในเดือนหน้า',
                     '*แต่ทางศูนย์จะเปิดให้นักเรียนและผู้ที่สนใจสามารถเข้ามาเล่นบอร์ดเกมส์ได้ ในคืนวันอังคารนี้ (17 กันยายน, 18:30-20:30น) และวันพฤหัส (19 กันยายน, 18:30-20:00น -- กิจกรรมที่สวนลุมพินีไม่ใช่อยู่ที่ศูนย์) ค่ะ เรายินดีต้อนรับทุกคนค่ะ'
                     ];
      } else {
        textItems = ['Improve Your English',
                     'We understand Thai people want to improve their English and develop their abilities to communicate with Western people. City English Project offers a 5 day training in which Thai people can become more confident in their English speaking and listening through practicing conversation, fun activities and learning games.',
                     'click below to choose a 5-day seminar',
                     '(a 5-day seminar costs 699 baht -- Special promotion price - 599 baht)',
                     'Register',
                     'Announcement',
                     'The City English Project will close the term from 16 to 27 September for classes. Our next City Talk classes will start again next month.',
                     'However, even though we will not have classes, we will be open at our center this Tuesday (17 Sept, 18:30-20:30) and Thursday (19 Sept, 18:30-20:00 at Lumphini park, not the Center) for conversation and games. We would love for all of you to join us!'];
      }

      const { MDBBtn } = this.state.mdbreact;

      return (
        <TrainingContainer className="container-fluid">
          <TitleText className="text-center">{textItems[0]}</TitleText>
          <DescriptionText className="text-center">{textItems[1]}</DescriptionText>

          {(this.state.class_times.length !== 0) ? 
            <div>
              <SubtitleText className="text-center">{textItems[2]}</SubtitleText>
              <SubtitleTextTwo className="text-center">{textItems[3]}</SubtitleTextTwo>
              <div className="row">
                <div className="col">
                    <NoBulletsInList>
                      {
                        this.state.class_times.map((e, key) => {
                          language === "thai" ? period = e.period_thai : period = e.period;
                          return  <SpacedListItem className="text-center" key={e.period} value={e.id} >
                                    <Link style={{color: `#2D3179`, fontSize: `130%`}} to={`/app/register/${e.id}`}>
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