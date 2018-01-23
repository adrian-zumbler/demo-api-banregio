import { ApiOAuthService } from './apiOAuth.service';
import { HttpClient } from '@angular/common/http'; 


export class ApiBanregioTokenHelper {
    baseUrl: string = "https://api.banregio.com/oauth/authorize"
    response_type: string = "code"
    client_id: string
    secret_key: string
    redirect_uri: string
    options: object
    authorizationUrl: string
    accessToken: string

    constructor(client_id:string,secret_key:string,redirect_uri:string ){
        this.client_id = client_id;
        this.secret_key = secret_key;
        this.redirect_uri = redirect_uri;
        
    }

    public  build(): ApiBanregioTokenHelper {
        var parameters = {
            "client_id": "client_id=".concat(this.client_id),
            "response_type": "response_type=".concat(this.response_type),
            "redirect_uri": "redirect_uri=".concat(this.redirect_uri)
        }
        this.authorizationUrl = this.baseUrl.concat(
            "?".concat(parameters.response_type)
        ).concat(
            "&".concat(parameters.client_id)
        ).concat(
            "&".concat(parameters.redirect_uri)
        );
        return this;
    }

    public getAuthorizeUrl(): string {
        return this.authorizationUrl;
    }

    public service(code:string): ApiBanregioTokenHelper {
        this.getAuthorizationResponse(code)
        return this;
    }

    public getAccessToken(): string {
        return this.accessToken
    }

    private getAuthorizationResponse(code:string): void {
        let options = {
            "client_id": this.client_id,
            "secret_key": this.secret_key,
            "redirect_uri": this.redirect_uri,
            "code": code
        }
    }

}