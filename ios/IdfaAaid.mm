#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(IdfaAaid, NSObject)

RCT_EXTERN_METHOD(getAdvertisingInfo:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
