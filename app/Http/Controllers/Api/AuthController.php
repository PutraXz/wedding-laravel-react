<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        try {
            if(Auth::attempt($request->only('email', 'password'))){
                $user = Auth::user();
                $token = $user->createToken('Token')->plainTextToken;
                return response()->json([
                    'message' => 'Success Login',
                    'data' => $user,
                    'token' => $token,
                ]);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
