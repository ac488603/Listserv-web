import Organization from './organization.js'
import Student from './student.js'
const orgs = new Organization('Fresno State'); // root of data structure

//list setup
//organizations
const CSM = new Organization('CSM')
const Lyles = new Organization("Lyles")
const CSCI = new Organization("CSCI")
const MathDepart = new Organization("Math")
const ECE = new Organization("ECE")

//students
const Alex = new Student('Alex')
const Elizabeth = new Student('Elizabeth')
const Kishan = new Student("Kishan")
const Kushad = new Student("Khushad")
const Sean = new Student("Sean")
const Conner = new Student("Conner")

CSCI.addComponent(Alex)
CSCI.addComponent(Elizabeth)
CSCI.addComponent(Kishan)
CSCI.addComponent(Kushad)
MathDepart.addComponent(Sean)
ECE.addComponent(Conner)

CSM.addComponent(MathDepart)
CSM.addComponent(CSCI)
Lyles.addComponent(ECE)
orgs.addComponent(CSM)
orgs.addComponent(Lyles)

export default orgs;