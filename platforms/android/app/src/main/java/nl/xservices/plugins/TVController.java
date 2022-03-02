package nl.xservices.plugins;

import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class TVController extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("TV_ON")) {
            Toast.makeText(cordova.getContext(), "TV ON", Toast.LENGTH_SHORT).show();
            return true;
        }
        return false;
    }
}
