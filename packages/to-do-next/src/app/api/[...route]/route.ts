import  {cookies,headers}  from 'next/headers'
import serverHttp from "@/service/http/serverHttp";
import { NextResponse } from 'next/server';



export async function GET(request: Request) {
    const url = request.url;
    const path = new URL(url).pathname.replace("/api/", '');

    const cookieStore = cookies()


    const token =  cookieStore.get('token')?.value;

    try{

        const res = await serverHttp.get(path, {
            headers: {
                authorization: token?`Basic ${token}`:undefined
            }
        });
        
        const json = await res.json();

        return NextResponse.json(json, { status: res.status });
    }catch(e){

        return NextResponse.json('error', { status: 500});;
    }
}



export async function POST(request: Request) {
   
    const url = request.url;
    const path = new URL(url).pathname.replace("/api/", '');
    const token = cookies().get("token")?.value;
    const body = await request.json();

    const res = await serverHttp.post(path, {
        body:JSON.stringify(body),
        headers: {
            authorization: token?`Basic ${token}`:undefined
        }
    });
    const json = await res.json();
    return NextResponse.json(json, { status: res.status });
}

export async function PUT(request: Request) {
    const url = request.url;
    const path = new URL(url).pathname.replace("/api/", '');
    const token = cookies().get("token")?.value;

    
    const res = await serverHttp.put(path, {
 
        headers: {
            authorization: token?`Basic ${token}`:undefined
        }
    });
    const json = await res.json();
    return NextResponse.json(json, { status: res.status });
}

export async function DELETE(request: Request) {
    const url = request.url;
    const path = new URL(url).pathname.replace("/api/", '');

    const token = cookies().get("token")?.value;
    const res = await serverHttp.delete(path, {
        headers: {
            authorization: token?`Basic ${token}`:undefined
        }
    });
    const json = await res.json();
    return NextResponse.json(json, { status: res.status });
}



 
