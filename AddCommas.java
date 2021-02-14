public class AddCommas {

    public String addCommas(int num) {
        String numString = Integer.toString(num);
        String result = "";
        String end;
        int commasNeeded = 0;
        int n = numString.length();

        if (n < 4) {
            return numString;
        }

        else {
            int temp = n;
            while (temp - 3 > 0) {
                commasNeeded++;
                temp = temp - 3;
            }

            while (commasNeeded > 0) {
                end = "," + numString.substring(numString.length()-3);
                result = end + result;
                commasNeeded--;
                numString = numString.substring(0, numString.length()-3);
            }
            result = numString + result;
        }
        return result;
    }

    public static void main(String[] args) {
        AddCommas test = new AddCommas();
        System.out.println(test.addCommas(123456789));
    }
}