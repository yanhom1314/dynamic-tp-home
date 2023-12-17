---
title: 代码使用
icon: code
order: 1
author: yanhom
date: 2022-06-11
tag:
  - 代码使用
  - dynamictp
sticky: true
star: true
---

### 线程池定义
 
建议直接配置在配置中心，但是如果想后期再添加到配置中心，可以先用 @Bean 编码式声明（方便 Spring 依赖注入）

  ```java
  @Configuration
  public class ThreadPoolConfiguration {
  
    /**
     * 通过{@link DynamicTp} 注解定义普通juc线程池，会享受到该框架增强能力，注解名称优先级高于方法名
     *
     * @return 线程池实例
     */
    @DynamicTp("jucThreadPoolExecutor")
    @Bean
    public ThreadPoolExecutor jucThreadPoolExecutor() {
      return (ThreadPoolExecutor) Executors.newFixedThreadPool(1);
    }
  
    /**
     * 通过{@link DynamicTp} 注解定义spring线程池，会享受到该框架增强能力，注解名称优先级高于方法名
     *
     * @return 线程池实例
     */
    @DynamicTp("threadPoolTaskExecutor")
    @Bean
    public ThreadPoolTaskExecutor threadPoolTaskExecutor() {
      return new ThreadPoolTaskExecutor();
    }
  
    /**
     * 通过{@link ThreadPoolCreator} 快速创建一些简单配置的线程池，使用默认参数
     * tips: 建议直接在配置中心配置就行，不用@Bean声明
     *
     * @return 线程池实例
     */
    @Bean
    public DtpExecutor dtpExecutor0() {
      return ThreadPoolCreator.createDynamicFast("dtpExecutor0");
    }
  
    /**
     * 通过{@link ThreadPoolBuilder} 设置详细参数创建动态线程池
     * tips: 建议直接在配置中心配置就行，不用@Bean声明
     * @return 线程池实例
     */
    @Bean
    public ThreadPoolExecutor dtpExecutor1() {
      return ThreadPoolBuilder.newBuilder()
              .threadPoolName("dtpExecutor1")
              .threadFactory("test-dtp-common")
              .corePoolSize(10)
              .maximumPoolSize(15)
              .keepAliveTime(40)
              .timeUnit(TimeUnit.SECONDS)
              .workQueue(MEMORY_SAFE_LINKED_BLOCKING_QUEUE.getName(), 2000)
              .buildDynamic();
    }
  
    /**
     * 通过{@link ThreadPoolBuilder} 设置详细参数创建动态线程池
     * eager，参考tomcat线程池设计，适用于处理io密集型任务场景，具体参数可以看代码注释
     * tips: 建议直接在配置中心配置就行，不用@Bean声明
     * @return 线程池实例
     */
    @Bean
    public DtpExecutor eagerDtpExecutor() {
      return ThreadPoolBuilder.newBuilder()
              .threadPoolName("eagerDtpExecutor")
              .threadFactory("test-eager")
              .corePoolSize(2)
              .maximumPoolSize(4)
              .queueCapacity(2000)
              .eager(true)
              .buildDynamic();
    }
  
    /**
     * 通过{@link ThreadPoolBuilder} 设置详细参数创建动态线程池
     * ordered，适用于处理有序任务场景，任务要实现Ordered接口，具体参数可以看代码注释
     * tips: 建议直接在配置中心配置就行，不用@Bean声明
     * @return 线程池实例
     */
    @Bean
    public OrderedDtpExecutor orderedDtpExecutor() {
      return ThreadPoolBuilder.newBuilder()
              .threadPoolName("orderedDtpExecutor")
              .threadFactory("test-ordered")
              .corePoolSize(4)
              .maximumPoolSize(4)
              .queueCapacity(2000)
              .buildOrdered();
    }
  
    /**
     * 通过{@link ThreadPoolBuilder} 设置详细参数创建线程池
     * scheduled，适用于处理定时任务场景，具体参数可以看代码注释
     * tips: 建议直接在配置中心配置就行，不用@Bean声明
     * @return 线程池实例
     */
    @Bean
    public ScheduledExecutorService scheduledDtpExecutor() {
      return ThreadPoolBuilder.newBuilder()
              .threadPoolName("scheduledDtpExecutor")
              .corePoolSize(2)
              .threadFactory("test-scheduled")
              .rejectedExecutionHandler(CALLER_RUNS_POLICY.getName())
              .buildScheduled();
    }
  }
  ```

### 代码引用

从 DtpRegistry 中根据线程池名称获取，或者通过依赖注入方式（推荐，更优雅）

+ 依赖注入方式使用，优先推荐依赖注入方式，不能使用依赖注入的场景可以使用方式2
  
  ```java
  @Resource
  private ThreadPoolExecutor dtpExecutor1;
  
  public void exec() {
     dtpExecutor1.execute(() -> System.out.println("test"));
  }
  ```
  
+ 从 DtpRegistry 注册器获取（接口场景可用）
  
  ```java
  public static void main(String[] args) {
     DtpExecutor dtpExecutor = DtpRegistry.getDtpExecutor("dtpExecutor1");
     dtpExecutor.execute(() -> System.out.println("test"));
  }
  ```

+ 更详细使用实例请参考 `example` 工程
