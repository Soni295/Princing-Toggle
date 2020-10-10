class Plan{
  constructor(type,monthly,diskspace,bandwith,emailAdress) {
    this.type=type
    this.monthly=monthly
    this.diskspace = diskspace
    this.bandwith = bandwith
    this.emailAdress = emailAdress
    this.wordPress = 'WordPress Installs'
    this.support = 'Private Support'
  }
}

export const basic = new Plan('Basic', 39, 1, 10, 2) 
export const premium = new Plan('Premium', 49, 5, 50, 4) 
export const business = new Plan('Business', 59, 20, 100, 10) 
