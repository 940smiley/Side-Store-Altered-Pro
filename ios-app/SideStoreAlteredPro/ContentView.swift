import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "hand.wave")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("SideStore Altered Pro")
                .font(.largeTitle)
                .padding()
            Text("Your custom SideStore experience")
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
