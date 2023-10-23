        #include<stdio.h>
            
        int main(){
            int size,sum =0;
             float result;
            printf("enter the size of array");
            scanf("%d",&size);
            int arr[size];
            printf("enter the %d elements in the array",size);
            for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
                sum +=arr[i];
            }
        
            result= sum/size;
            printf("average of array elements : %f",result);
            return 0;
        }