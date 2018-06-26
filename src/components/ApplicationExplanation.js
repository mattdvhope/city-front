import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import styled from "styled-components";

const ExplanationStyler = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 120%;
`

export default class Example extends Component {
	
  constructor(props) {
  	super(props)
    this.state = {
      detailed: false,
      window: undefined
    }
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    this.setState({ window: window });
  }
  
  toggle() {
  	console.log(this.state.detailed)
  	this.setState({detailed: !this.state.detailed})
  }

	render() {
    let textItems = [];
    if (this.state.window) {

      console.log(this.state.window.localStorage.language)

      if (this.state.window.localStorage.language === "thai") {
        textItems = ['You Can Speak! เป็นหลักสูตรการสนทนาภาษาอังกฤษ ซึ่งประกอบไปด้วย 2 ส่วน ที่ออกแบบมาเพื่อช่วยให้คนไทยพัฒนาการพูดภาษาอังกฤษได้อย่างชัดเจนและมีความมั่นใจ หลักสูตรนี้ยังจะช่วยให้คนไทยมีโอกาสในการพัฒนาทักษะการสร้างความสัมพันธ์ข้ามวัฒนธรรมทั้งในระดับส่วนตัวและความสัมพันธ์ทางธุรกิจควบคู่กันไปด้วย',
                    ' (...กดเพื่ออ่านต่อ...)',
                    'หลักสูตร You Can Speak! ในแต่ละส่วน ประกอบด้วย 5 คาบเรียนๆ ละ 90 นาที',
                    'ทุกชั้นเรียนสอนโดยเจ้าของภาษา ที่ผ่านการรับรองจาก TESOL',
                    'ชั้นเรียนมีความสนุกสนาน มีส่วนร่วม และมุ่งช่วยให้นักเรียนได้พูดภาษาอังกฤษอย่างชัดเจน ถูกต้อง และมีความมั่นใจ',
                    'ในชั้นเรียนมีหนังสือประกอบการเรียนให้ฟรี (มูลค่า 300 บาท)',
                    'ในชั้นเรียนมีเนื้อหาเกี่ยวกับวัฒนธรรมตะวันตกและโลกทัศน์คริสเตียน เพื่อช่วยให้คนไทยสามารถสร้างความสัมพันธ์ข้ามวัฒนธรรมได้อย่างมีประสิทธิภาพ',
                    'ผู้เรียนทุกคนที่จบหลักสูตร You Can Speak! ทั้ง 2 ส่วน นี้จะได้รับประกาศนียบัตรและสิทธิ์ในการเป็นสมาชิกโครงการซิตี้ อิงลิช ฟรี 1 ปี',
                    'หลักสูตร You Can Speak! ถูกออกแบบมาเพื่อนักเรียนระดับเบื้องต้น และระดับกลาง',
                    'เว็บไซต์ของเรามีความปลอดภัย ข้อมูลของคุณจะไม่ถูกเผยแพร่ในที่ใด',
                    'เรียนที่เซนเตอร์ของเรา',
                    'ตั้งอยู่ใจกลางเมืองย่านสีลม มีความสะดวกสบาย',
                    'บรรยากาศน่าเรียน',
                    'มีตารางเรียนให้เลือกมากมาย',
                    'จัดชั้นเรียนกลุ่มเล็กแค่ 6-10 คน',
                    'เรียนที่สถานที่ของคุณ',
                    'เราจะไปสอนคุณถึงที่',
                    'คุณสามารถเลือกช่วงเวลาเรียนเองได้',
                    'เปิดรับเฉพาะในพื้นที่ สาทร บางรัก คลองเตย ปทุมวัน คลองสาน และพระนคร']
      } else {
        textItems = ['You Can Speak! is a 2-part  conversational English course specially designed to help Thais improve confidence and clarity in speaking English. Students must complete Part One of the course before signing up for Part Two. The curriculum helps Thais establish a foundation for building personal and business relationships cross-culturally.',
                    '(...click here to read more...)',
                    '"You Can Speak!" Part One and Part Two each include five 90 min classes.',
                    'Each class is taught by TESOL certifed, native English speakers.',
                    'Classes are fun, interactive and focus on helping students speak with clarity and confidence.',
                    'Classes includes a free workbook (value 300B per book).',
                    'The classes include aspects of Western culture and Christian worldview to help Thais effectively build cross-cultural relationships.',
                    'All students who successfully complete the "You Can Speak!" Part One and Part Two are awarded a certificate and a free one year membership to City English Project.',
                    '"You Can Speak!" is designed for beginner and intermediate levels',
                    'Our website is secure. We will not share your information with anyone!',
                    'At Our Center',
                    'Conviently located in the Silom district',
                    'Professional environment',
                    'Multiple schedules to choose from',
                    'Small classes (6-10 people)',
                    'At Your Location',
                    'We come to you!',
                    'You decide the schedule for class times.',
                    'Available in Sathorn, Bangrak, Khlong Toei, Pathum Wan, Khlong San, Pranakorn'];

      }
    }

  	return (
  		<ExplanationStyler>
				<h4>{textItems[0]} <span onClick={this.toggle} style={{color: `blue`, cursor: `pointer`}}>{textItems[1]}</span>
				</h4>
        <Collapse in={this.state.detailed}>
          <div>
					  <ul>
					    <li>{textItems[2]}</li>
					    <li>{textItems[3]}</li>
					    <li>{textItems[4]}</li>
					    <li>{textItems[5]}</li>
					    <li>{textItems[6]}</li>
					    <li>{textItems[7]}</li>
					    <li>{textItems[8]}</li>
					    <li>{textItems[9]}</li>
					  </ul>
					  <br/>
					  <h4>{textItems[10]}</h4>
					  <ul>
					    <li>{textItems[11]}</li>
					    <li>{textItems[12]}</li>
					    <li>{textItems[13]}</li>
					    <li>{textItems[14]}</li>
					  </ul>
					  <br/>
					  <h4>{textItems[15]}</h4>
					  <ul>
					    <li>{textItems[16]}</li>
					    <li>{textItems[17]}</li>
					    <li>{textItems[18]}</li>
					  </ul>
          </div>
        </Collapse>
  		</ExplanationStyler>
    )
  }
}
