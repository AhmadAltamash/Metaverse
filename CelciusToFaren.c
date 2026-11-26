#include <stdio.h>
int main()
{
    float C, F;

    puts("Farenheit=");
    scanf("%f", &F);
    puts("Celcius=");
    scanf("%f", &C);

    printf("Farenheit into Celcius= %.1f\n", (F - 32) * 5 / 9);
    printf("Celcius into Farenheit= %.1f", (C * 9 / 5) + 32);
    return 0;
}