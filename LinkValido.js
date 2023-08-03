export default class LinkValido  {

    constructor (link, status){

        this.link = link

        this.status = status


    }


    get _link(){
        return this.link
    }


    get _status(){
        return this.status
    }

}