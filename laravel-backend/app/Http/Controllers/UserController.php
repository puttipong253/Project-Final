<?php

    namespace App\Http\Controllers;

    use App\User;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Validator;
    use JWTAuth;
    use Tymon\JWTAuth\Exceptions\JWTException;

    class UserController extends Controller
    {
        public function authenticate(Request $request)
        {
                
            $credentials = $request->only('email', 'password');

            try {
                if (! $token = JWTAuth::attempt($credentials)) {
                    return response()->json(['error' => 'invalid_credentials'], 400);
                }
            } catch (JWTException $e) {
                return response()->json(['error' => 'could_not_create_token'], 500);
            }

            return $token;
        }

        public function register(Request $request)
        {
                $validator = Validator::make($request->all(), [
              
            ]);

            if($validator->fails()){
                    return response()->json($validator->errors()->toJson(), 400);
            }

            $user = User::create([ 
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password')),
                'name' => $request->get('name'),
                'surname' => $request->get('surname')
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json(compact('user','token'),201);
        }

        public function getAuthenticatedUser()
            {
                    
                    try {

                            if (! $user = JWTAuth::parseToken()->authenticate()) {
                                    return response()->json(['user_not_found'], 404);
                            }

                    } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

                            return response()->json(['token_expired'], $e->getStatusCode());

                    } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

                            return response()->json(['token_invalid'], $e->getStatusCode());

                    } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

                            return response()->json(['token_absent'], $e->getStatusCode());

                    }

                    return response()->json(compact('user'));
            }
        
            public function updateUser(Request $request){
                \DB::table('users')
                ->where('id', $request->id)
                ->update([
                'name' => $request->name
                ,'surname'=> $request->surname ]);
            }


              
            public function updatePassword(Request $request){
              $user =   \DB::table('users')
                ->where('id', $request->id)
                ->update([ 'password' =>  Hash::make($request->password) ]);
                if($user){
                    return 'Change Password success';
                }else{
                    return $user;
                }

            }
    }